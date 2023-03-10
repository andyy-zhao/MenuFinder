import { Background } from '../components/Background';
import { NavBar } from '../components/navbar/Navbar';
import { SignInForm } from '../components/signinform/SignInForm';

export const SignIn = () => {
    return (
        <div className="App">
            <Background />
            <NavBar />
            <SignInForm />
        </div>
    )
}


