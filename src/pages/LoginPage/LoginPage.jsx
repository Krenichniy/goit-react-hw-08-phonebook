import LoginForm from '../../modules/LoginForm/LoginForm';
import {  useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';
const LoginPage = () => {
    const dispatch = useDispatch();


    const onLogin = (data) => {
        dispatch(signIn(data))
    }
    return (
        <div>
            <LoginForm onSubmit={onLogin}/>
        </div>
    )
}

export default LoginPage;