Game of Thrones themed ChatBot
Author: Lea Cornelis Martínez
eMail: leacormar@gmail.com

**_Encountered Problems:_**
- 1st rpoblem: Once the project has been created (botonic new ...) and executed, there should appear a very basic chatbot that answers "I don't understand" to every message. However, every time I try that the localhost page opened in my browser appears blank. If I open the console of said browser page i get an error from the node_modules directory which i have tried to fix, unsuccesfully. Therefor, instead of getting stuck with this I have decided that it would be best for me to program the required exercises first, although I have not been able to check if they work, and then use the spare time to try and fix this issue
- The other commits (not counting the ReadMe) have been created/written without being able to see the result. When i execute the chatBot, an empty screen appears

---------------------------------------------------------------------------------------

**_Intended Colour Palette:_** https://coolors.co/c5c5c5-000000-79a3fe-acc6ff-f3f7fc
- Chat background: #F3F7FC
- Client request message buble: #ACC6FF
- App Bar: #79A3FE
- Requests and answers text Colour: #000000
- App Bar text colour: #FFFFFF
- Chat generated answer message bubble: ##C5C5C5

---------------------------------------------------------------------------------------

**_TASK STATES:_**
- **TO DO** (hasn't been started)
- **WRITTEN** (code has been written but I am unable to test it at the moment)
- **DONE** (code has been checked and works)
- **REDO** (code has been checked and doesn't work)

---------------------------------------------------------------------------------------

**_ABOUT:_**
The goal is to build a small chatbot of Game of Thrones-
Of course, using Botonic and with the following requirements:
- When the user talks for the first time, the bot should show a carousel with 3 different GoT Houses (chosen randomly). You should get the information from this public API (https://anapioficeandfire.com/). Each element of the carousel should have a button that, when clicked, should return the Words of that given House. If a House has no Words, it should not appear in the carousel. The image of the carousel should be generated using the DALL-E-3 API, you should pass the "coatOfArms" description provided in the GoT API to the DALL-E prompt.  **WRITTEN**
- If the user says anything, the bot will simply use the Chat Completion API from OpenAI to generate a response. Use the GPT-4 model. **WRITTEN**
- Extra: adapt the webchat styles with GoT (anyway you like, use your creativity!). **WRITTEN** 
- Extra: try to play a little bit with OpenAI prompts to achieve the best results for images and text generated (be creative here too!) **TO DO**
- Extra: try to make the bot respond as fast as possible. **TO DO**
