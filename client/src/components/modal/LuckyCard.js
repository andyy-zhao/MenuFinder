import React, { useState, useEffect }from "react"
import Card from 'react-bootstrap/Card'
import shuffleImg from "../../assets/icons/shuffle.png";
import '../../styles.css';
import Nav from 'react-bootstrap/Nav';

export const LuckyCard = ({shuffleCard, restaurant}) => {
    const [url, setUrl] = useState(`/restaurant/${restaurant.name}`)
    useEffect(() => {
        setUrl(`/restaurant/${restaurant.name}`)
    }, [restaurant.name])

    return (
        <Card className="lucky-card-main">
            <Card.Img variant="top" src={restaurant.image} className="lucky-img"/>
            {console.log(url)}
            <Card.Body>
            <Card.Text>
                <div className="lucky-name">
                <Nav className="lucky-nav">
                    <Nav.Item>
                        <Nav.Link href={url}>
                            {restaurant.name}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
                <div>
                    {restaurant.location} 
                    <button onClick={shuffleCard} className="shuffle-btn"><img src={shuffleImg} alt='shuffle' style={{ width: "30px", height: "30px" }}/></button>
                </div>
            </Card.Text>
            </Card.Body>
      </Card>
    );
}