import React from 'react';
import { Text, Carousel, Element, Button } from '@botonic/react';
//import { getRandomHouses } from '../services/gotService';
//import { generateImage } from '../services/dalleService';

export default class extends React.Component {
  static async botonicInit() {
    const houses = await getRndHouses();
    for (let house of houses) {
      house.image = await getDalleImage(house.coatOfArms);
    }
    return { houses };
  }

  render() {
    return (
      <>
        <Text>Welcome to the Game of Thrones chatbot! Choose a House:</Text>
        <Carousel>
          {this.props.houses.map(house => (
            <Element key={house.name}>
              <img src={house.image} alt={house.name} />
              <Button payload={house.words}>{house.name}</Button>
            </Element>
          ))}
        </Carousel>
      </>
    );
  }
}
