import './SignInForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const SignInForm = () => {
    
    return (
        <Form className="sign-in-form">
            <Form.Text className="sign-in-form-welcome">
                Welcome
            </Form.Text>
            <Form.Text className="sign-in-guest">
                Guest,
            </Form.Text>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <div className='btn-login-group'>
                <Button className="login-btn lgn-color1" variant="contained" type="submit" >
                Login
                </Button>
                <Button className="login-btn" variant="primary" type="submit" >
                Signup
                </Button>
            </div>
            <div className='link-to-home'>
                <Link to="/home" className='link-to-home'>Sign in as guest</Link>
            </div>
        </Form>
    )
}
