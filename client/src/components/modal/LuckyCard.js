import React, {useState }from "react"
import Card from 'react-bootstrap/Card'
import RestaurantData from "../../restaurants.json";
import shuffleImg from "../../assets/icons/shuffle.png";
import '../../styles.css';
import Nav from 'react-bootstrap/Nav';

export const LuckyCard = () => {
    let numRestaurants = RestaurantData[0].restaurants.length - 1;
    let featuredNum = Math.floor(Math.random() * numRestaurants);
    const [restaurant, setRestaurant] = useState(RestaurantData[0].restaurants[featuredNum])
    const [url, setUrl] = useState(`/restaurant/${restaurant.name}`)

    const shuffleCard = () => {
        let prevNum = featuredNum;
        featuredNum = Math.floor(Math.random() * numRestaurants);
        while (prevNum === featuredNum) {
            featuredNum = Math.floor(Math.random() * numRestaurants);
        }
        setRestaurant(RestaurantData[0].restaurants[featuredNum]);
        setUrl(`/restaurant/${restaurant.name}`)
    }

    return (
        <Card className="lucky-card-main">
            <Card.Img variant="top" src={restaurant.image} className="lucky-img"/>
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
                    <button onClick={shuffleCard} className="shuffle-btn"><img src={shuffleImg} style={{ width: "30px", height: "30px" }}/></button>
                </div>
            </Card.Text>
            </Card.Body>
      </Card>
    );
}