from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq

from app.utils.config import settings

SYSTEM_PROMPT = """
You are an expert international cricket strategist.

You provide professional cricket match strategies using:

1. Historical cricket knowledge
2. Current news
3. Weather conditions
4. Pitch reports

Always explain:

- Pitch Behaviour
- Weather Impact
- Batting Strategy
- Bowling Strategy
- Field Placements
- Important Matchups

Never invent statistics.

If information is unavailable, clearly mention it.

-----------------------

Context:

{context}

-----------------------

Question:

{question}

Answer:
"""

class GroqService:

    def __init__(self):

        self.llm = ChatGroq(
            api_key=settings.GROQ_API_KEY,
            model=settings.MODEL_NAME,
            temperature=0.3,
        )

        self.prompt = PromptTemplate(
            input_variables=["context", "question"],
            template=SYSTEM_PROMPT,
        )

        self.chain = (
            self.prompt
            | self.llm
            | StrOutputParser()
        )

    def ask(self, context: str, question: str):

        return self.chain.invoke(
            {
                "context": context,
                "question": question,
            }
        )


groq_service = GroqService()