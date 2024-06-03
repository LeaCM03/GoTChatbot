import axios from 'axios';

const CHAT_API_URL = 'https://api.openai.com/v1/chat/completions';

export default async function({ input }) {
    const response = await axios.post(CHAT_API_URL, {
      model: 'gpt-4',
      messages: [{ role: 'user', content: input.data }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
  
    return response.data.choices[0].message.content;
}
