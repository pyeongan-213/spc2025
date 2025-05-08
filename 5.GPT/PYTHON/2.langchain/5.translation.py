from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI
from dotenv import load_dotenv

from langchain_core.runnables import RunnableLambda

load_dotenv()

template = "다음 문장을 한국어로 번역해줘:\n\n{sentence}"
prompt = PromptTemplate(input_variables=["sentence"], template=template)
llm = OpenAI(
    temperature=0.3, # 번역할거니 정확하게 창의력을 최소화 해서
    max_tokens=1024
)

chain = prompt | llm | RunnableLambda(lambda x : {'translated': x.strip()})

result = chain.invoke({'sentence': 
                       """The humanities explore human experience, culture, and values through disciplines such as philosophy, literature, history, art, and language. A typical humanities book examines how people across time and place have expressed meaning, identity, and beliefs. It encourages critical thinking about morality, beauty, power, and the human condition. Through analysis of texts, artworks, and historical contexts, the reader is invited to reflect on how culture shapes thought and how ideas evolve. For example, the book may explore how Greek philosophy laid foundations for Western ethics, or how Renaissance art reflected shifts in human perspective. It might also discuss how literature gives voice to marginalized groups or how language influences perception. Ultimately, humanities books aim to deepen our understanding of what it means to be human—fostering empathy, awareness, and a sense of continuity with the past while raising questions about the future."""
})

print('한글번역본: ', result['translated'])