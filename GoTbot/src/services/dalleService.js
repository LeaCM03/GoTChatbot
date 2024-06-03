const axios = require('axios');


const DALL_E_API_URL = 'https://api.openai.com/v1/images/generations';

const getDalleImage = async (description) => {
    const response = await axios.post(DALL_E_API_URL,{
        model: "dall-e-3", 
        prompt: description,
        n:1,
        size: "256x256"
    }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
    });

    return image.data.data[0].url;
};


module.exports = { getDalleImage};