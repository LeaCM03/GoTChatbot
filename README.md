Game of Thrones themed ChatBot
Author: Lea Cornelis Martínez
eMail: leacormar@gmail.com

Encountered Problems:
- The first 4 commits (not counting the ReadMe) have been created/written without being able to see the result. When i execute the chatBot, an empty screen appears

TASK STATES:
- TO DO (hasn't been started)
- WRITTEN (code has been written but I am unable to test it at the moment)
- DONE (code has been checked and works)
- REDO (code has been checked and doesn't work)

ABOUT:
The goal is to build a small chatbot of Game of Thrones-
Of course, using Botonic and with the following requirements:
- When the user talks for the first time, the bot should show a carousel with 3 different GoT Houses (chosen randomly). You should get the information from this public API (https://anapioficeandfire.com/). Each element of the carousel should have a button that, when clicked, should return the Words of that given House. If a House has no Words, it should not appear in the carousel. The image of the carousel should be generated using the DALL-E-3 API, you should pass the "coatOfArms" description provided in the GoT API to the DALL-E prompt.  WRITTEN
- If the user says anything, the bot will simply use the Chat Completion API from OpenAI to generate a response. Use the GPT-4 model. WRITTEN
- Extra: adapt the webchat styles with GoT (anyway you like, use your creativity!).
- Extra: try to play a little bit with OpenAI prompts to achieve the best results for images and text generated (be creative here too!)
- Extra: try to make the bot respond as fast as possible.
