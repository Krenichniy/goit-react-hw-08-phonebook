import LoginForm from '../../modules/LoginForm/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../redux/auth/auth-operations';
import { isAuth } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(isAuth)

    const onLogin = (data) => {
        dispatch(signin(data))
    }
    if (isLogin) {
        return <Navigate to='/contacts'/>
    }
    return (
        <div>
            <h2>Login Page</h2>
            <LoginForm onSubmit={onLogin}/>
        </div>
    )
}

export default LoginPage;