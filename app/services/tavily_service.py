from tavily import TavilyClient
from app.utils.config import settings


class TavilyService:

    def __init__(self):
        self.client = TavilyClient(api_key=settings.TAVILY_API_KEY)

    def search(self, query: str, max_results: int = 3):

        return self.client.search(
            query=query,
            search_depth="advanced",
            max_results=max_results,
            include_answer=True,
            include_raw_content=False,   # IMPORTANT
        )

    def get_context(self, query: str):

        response = self.search(query)

        contexts = []

        for result in response.get("results", []):

            title = result.get("title", "")
            url = result.get("url", "")
            content = result.get("content", "")

            contexts.append(
                f"""
Title: {title}

URL: {url}

Summary:
{content}
"""
            )

        return "\n\n".join(contexts)


tavily_service = TavilyService()