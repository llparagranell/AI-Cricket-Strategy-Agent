from app.services.tavily_service import tavily_service
from app.services.groq_service import groq_service
from app.utils.config import settings


class CricketAgent:

    def __init__(self):

        self.live_keywords = [
            "today",
            "current",
            "latest",
            "live",
            "weather",
            "forecast",
            "injury",
            "injuries",
            "news",
            "tomorrow",
            "playing xi",
            "pitch report",
            "toss",
        ]

    def needs_live_data(self, question: str) -> bool:
        question = question.lower()
        return any(keyword in question for keyword in self.live_keywords)

    def build_context(self, question: str):

        sources = []
        context_parts = []

        # --------------------
        # ChromaDB Context
        # --------------------
        docs = []

        if not settings.DISABLE_RAG:
            from app.services.rag_service import rag_service

            docs = rag_service.retrieve(question, k=3)

        if docs:
            sources.append("ChromaDB")

            historical = []

            for i, doc in enumerate(docs, start=1):

                historical.append(
                    f"""
Document {i}

{doc.page_content[:800]}
"""
                )

            context_parts.append(
                "===== Historical Knowledge =====\n\n"
                + "\n".join(historical)
            )

        # --------------------
        # Tavily Context
        # --------------------
        if self.needs_live_data(question):

            tavily_context = tavily_service.get_context(question)

            if tavily_context:

                sources.append("Tavily")

                context_parts.append(
                    "===== Latest Information =====\n\n"
                    + tavily_context[:3000]
                )

        context = "\n\n".join(context_parts)

        # Safety limit
        context = context[:8000]

        return context, sources

    def ask(self, question: str):

        context, sources = self.build_context(question)

        answer = groq_service.ask(
            context=context,
            question=question,
        )

        return {
            "answer": answer,
            "sources": sources,
        }


agent = CricketAgent()
