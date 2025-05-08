from dotenv import load_dotenv
from langchain_openai import OpenAI
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain.agents import initialize_agent, AgentType

from langchain_community.tools.wikipedia.tool import WikipediaQueryRun
from langchain_community.utilities.wikipedia import WikipediaAPIWrapper

wiki = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper(lang="ko"))

load_dotenv()

llm = OpenAI(temperature=0.0, max_tokens=500) # agent 선택과 연동을 해야하는데? 창의적으로.. 이것저것?? xx 그래서, 명확하게 deterministic 하게..

# tools = load_tools(["wikipedia"])
tools = [wiki]

# 에이전트 초기화
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True # 운영할땐 끄는건데, 지금은 상세 내역을 보기 위해서
)

result = agent.invoke({"input": "등청감곡선에 대해 알려줘"})
print(result["output"])