import React from "react"
import Card from 'react-bootstrap/Card'
import '../../styles.css';
import Nav from 'react-bootstrap/Nav';

export const RestaurantCard = ({restaurant}) => {
    console.log("DATA: " + restaurant[0].category)
    const url = `/restaurant/${restaurant[0].name}`;
    console.log(url);

    return (
        <Nav>
            <Nav.Item className="see-menu-btn">
                <Nav.Link href={url} className="card-nav">
                    <Card>
                        <Card.Body>
                            <img src={restaurant[0].image} className="card-img"/>
                            <Card.Title className="card-title1">{restaurant[0].name}</Card.Title> 
                            <Card.Text>
                                <div className="card-body">
                                    <div>Business Hours Open: {restaurant[0].openHour} - {restaurant[0].closeHour}</div>
                                    <div>{restaurant[0].location}</div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}