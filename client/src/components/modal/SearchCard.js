import React from "react"
import Card from 'react-bootstrap/Card'
import '../../styles.css';
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col} from "react-bootstrap";

export const SearchCard = ({restaurant, item}) => {
    console.log(item)
    const url = `/restaurant/${restaurant.name}`;
    console.log("SHIT: " + JSON.stringify(Object.values(restaurant.menu[0])[0]));
    const img1 = Object.values(restaurant.menu[1])[0][0].image;
    const img2 = Object.values(restaurant.menu[2])[0][0].image
    return (
        <Nav>
            <Nav.Item className="see-menu-btn">
                <Nav.Link href={url} className="card-nav">
                    <Card className="search-card">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card.Title className="search-card-title1">{restaurant.name}</Card.Title> 
                                        <Card.Text>
                                            <div className="search-card-body">
                                                {item.name}
                                            </div>
                                            <div className="search-card-body">{item.price}</div>
                                            <div className="search-card-body">{restaurant.location}</div>
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <img src={item.image} className="search-card-img" alt="search card" />
                                        <img src={img1} className="search-card-img" alt="search card"/>
                                        <img src={img2} className="search-card-img" alt='search card'/>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}