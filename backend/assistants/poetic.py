import os
import glob
from openai import OpenAI

env_file = glob.glob('.env')


with open(env_file[0]) as f:
    for line in f:
        if line.strip() and not line.startswith('#'):
            key, value = line.strip().split('=', 1)
            os.environ[key] = value


client = OpenAI()

role = "You are an assistant that always answers with rhyme."

messages = []
messages.append({"role": "system", "content": role})


def get_poetic_response(user_message):
    messages.append({"role": "user", "content": user_message})

    response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=messages,
      temperature=1.0).choices[0].message.content
    
    messages.append({"role": "assistant", "content": response})
    return response
