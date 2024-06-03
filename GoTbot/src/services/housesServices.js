const axios = require('axios');

const API_URL = 'https://anapioficeandfire.com/api/houses';

export const getRndHouses = async () => {
    
    const response = await axios.get(API_URL);
    const houses = response.data.filter(house => house.word); //Filter houses with words
    return shuffleArray(houses).slice(0, 3);//Rnd pick 3 houses
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}