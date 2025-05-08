from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from dotenv import load_dotenv

from langchain_core.runnables import RunnableLambda

load_dotenv()

# template = "다음의 글을 3문장으로 요약하시오:\n\n{article}"
# 원샷 러닝
template = "다음의 글을 3문장으로 요약하시오:\n\n예) 1. xxx\n2. xxx\n3. xxx\n\n본문: {article}"
prompt = PromptTemplate(input_variables=["article"], template=template)
llm = OpenAI(temperature=0.5) # 요약이 목적이니 정확하게

chain = prompt | llm | RunnableLambda(lambda x: {"summary":x.strip()})

input_text = {
    "article": """천문학은 우주에 존재하는 천체와 그 현상을 연구하는 학문으로, 고대부터 인간의 호기심과 관찰로 시작되었습니다. 초기에는 별자리나 해, 달의 움직임을 기록하며 달력이나 농사 일정에 활용되었고, 고대 그리스의 프톨레마이오스는 지구 중심의 우주관(천동설)을 체계화했습니다. 하지만 16세기 코페르니쿠스가 태양 중심의 우주관(지동설)을 제안하고, 케플러가 행성의 타원 궤도 법칙을 발견하면서 근대 천문학이 열렸습니다. 이후 갈릴레이가 망원경을 이용해 목성의 위성과 태양 흑점을 관측하며 천동설을 부정했죠.
현대 천문학은 크게 관측 천문학과 이론 천문학으로 나뉘며, 광학 망원경뿐 아니라 전파, 적외선, 자외선, X선 등 다양한 파장의 빛을 활용해 우주를 탐구합니다. 허블 우주망원경, 제임스 웹 우주망원경은 대기 방해를 피하기 위해 우주에 설치된 대표적인 장비입니다. 이로 인해 수많은 은하, 블랙홀, 외계 행성, 우주 팽창 속도 등이 밝혀졌습니다.
또한, 천문학은 빅뱅 이론을 통해 우주의 기원과 진화를 설명하고, 암흑물질과 암흑에너지 같은 미지의 존재를 탐색하며 우주 전체의 구성 비율까지 연구합니다. 더 나아가 천문학은 철학, 물리학, 생명과학과도 깊게 연결되어 있으며, 인류가 ‘우리는 어디에서 왔고, 어디로 가는가’라는 근본적인 질문에 답하려는 학문입니다."""
}

result = chain.invoke(input_text)
print("요약 결과는")
print({result["summary"]})