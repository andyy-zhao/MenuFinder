import RestaurantData from "../../restaurants.json";
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';
import { RestaurantCard } from "./Card";


export const CategoryModal = ({modalType, handleClose}) => {
    const show = true;
    const restaurantArray = RestaurantData[0].restaurants;
    return (
      <>
        <Modal show={show} onHide={handleClose} className="main-modal">
          <Modal.Header closeButton>
            <Modal.Title>{modalType}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            {
                restaurantArray.map((restaurant,index) => {
                    if(restaurant.category === modalType) {
                        return (
                            <div key={index}>
                                <RestaurantCard restaurant={[restaurant]}/>
                            </div>
                        )
                    } else {
                      return null;
                    }
                }) 
            }
          </Modal.Body>
        </Modal>
      </>
    );
}