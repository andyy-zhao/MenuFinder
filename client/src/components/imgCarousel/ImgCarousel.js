import React from 'react';
import Carousel from 'react-multi-carousel';
import '../../styles.css';
import { useState } from 'react';

export const ImgCarousel = ( prop ) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const numItems = prop.item.length;
  let classname;
  if (numItems < 3) {
    classname = "img-slider-1";
  } else {
    classname = "img-slider";
  }

  return (
    <Carousel responsive={responsive} infinite={true} className={classname}>
      {
        prop.item.map((picture,index) => {
          return(
            <div key={picture.name}>
              <img src={picture.image} className="img-item" key={index}/>
              {picture.name}<br></br>
              {picture.price}
              {picture.pcs != "" && ` (` + picture.pcs + `)`}
            </div>
          ) 
        })
      }
    </Carousel>
  )
}
