import React from 'react';
import Carousel from 'react-multi-carousel';
import '../../styles.css';
import Card from 'react-bootstrap/Card'
import '../../styles.css';

export const ImgCarousel = ( prop ) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
    <div style={{
      paddingBottom: '20px',
      position: 'relative'
      }}>
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        arrows={true}
        className={classname}
        slidesToSlide={2}
        renderDotsOutside
        showDots
        keyBoardControl
        swipeable
        pauseOnHover>
        {
          prop.item.map((picture,index) => {
            return(
              <>
              {/* <div key={picture.name}>
                <img src={picture.image} className="img-item" key={index}/>
                {picture.name}<br></br>
                {picture.price}
                {picture.pcs != "" && ` (` + picture.pcs + `)`}
              </div> */}
              <Card className="slider-card">
                <Card.Img variant="top" src={picture.image} style={{height:'19rem', width:'18rem'}} />
                <Card.Body>
                  <Card.Title style={{color:"#36392D", fontFamily:"Archivo"}}>{picture.name}</Card.Title>
                  <Card.Text style={{color:"#36392D"}}>
                    {picture.price}
                    {picture.pcs != "" && ' (' + picture.pcs + ')'}
                  </Card.Text>
                </Card.Body>
              </Card>
              </>
            ) 
          })
        }
      </Carousel>
    </div>
  )
}
