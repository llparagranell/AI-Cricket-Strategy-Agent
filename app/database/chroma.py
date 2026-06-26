from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

from app.utils.config import settings


class ChromaService:

    def __init__(self):

        self.embedding = HuggingFaceEmbeddings(
            model_name=settings.EMBEDDING_MODEL
        )

        self.vectorstore = Chroma(
            collection_name=settings.COLLECTION_NAME,
            persist_directory=settings.CHROMA_DB_PATH,
            embedding_function=self.embedding,
        )

    def add_documents(self, documents):

        self.vectorstore.add_documents(documents)

    def similarity_search(self, query, k=5):

        return self.vectorstore.similarity_search(query, k=k)

    def as_retriever(self):

        return self.vectorstore.as_retriever(
            search_kwargs={"k": 5}
        )

    def count(self):

        return self.vectorstore._collection.count()

    def reset(self):

        self.vectorstore.delete_collection()


chroma_service = ChromaService()