from dotenv import load_dotenv

from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

# 1. 텍스트 문서 읽기
loader = TextLoader('./my-docs.txt', encoding='utf-8')
documents = loader.load()

# 2. 문서 안의 내용을 vector 화 해서 저장
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
texts = text_splitter.split_documents(documents)

# print("확인1", texts[0])
# print("청크2", texts[1])

embeddings = OpenAIEmbeddings()

store = Chroma.from_documents(texts, embeddings, collection_name="travel")

# 3. 대화하기 위한 모델 정의
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# 4. 데이터를 추출할 소스 정의
retriever = store.as_retriever()

# 5. 질문 템플릿 작성
template = """다음 내용을 참고해서 사용자의 질문에 답변하시오:
{context}

만약, 정보가 없으면 모른다고 답변해줘.
질문: {question}
"""

prompt = ChatPromptTemplate.from_template(template)

chain = (
    {"context": retriever, "question": RunnablePassthrough()} 
    | prompt
    | llm
)

response = chain.invoke("서울의 유명한 관광지를 알려주시오")
print(response.content)