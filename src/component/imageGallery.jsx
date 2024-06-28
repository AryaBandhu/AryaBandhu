import React from 'react'
import Person from '../assets/img/person.jpg'

function imageGallery() {
  const imageData = { Image1: Person.default };
  console.log(imageData.Image1); // or console.log(imageData);
  return imageData;
}

export default imageGallery