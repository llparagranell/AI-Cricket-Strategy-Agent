from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.database.chroma import chroma_service
from app.services.tavily_service import tavily_service


class RAGService:

    def __init__(self):

        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )

    def build_knowledge_base(self, topic: str):

        response = tavily_service.search(
            query=topic,
            max_results=15
        )

        documents = []

        for article in response.get("results", []):

            content = (
                article.get("raw_content")
                or article.get("content")
                or ""
            )

            if not content.strip():
                continue

            documents.append(
                Document(
                    page_content=content,
                    metadata={
                        "topic": topic,
                        "title": article.get("title", ""),
                        "url": article.get("url", ""),
                        "source": "Tavily"
                    }
                )
            )

        chunks = self.splitter.split_documents(documents)

        chroma_service.add_documents(chunks)

        return {
            "documents": len(documents),
            "chunks": len(chunks)
        }

    def retrieve(self, question: str, k=5):

        return chroma_service.similarity_search(
            question,
            k=k
        )


rag_service = RAGService()