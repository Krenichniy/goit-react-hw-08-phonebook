import RegisterForm from '../../modules/RegisterForm/RegisterForm'
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { isAuth } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
const RegisterPage = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(isAuth)

    const onRegister = (data) => {
        dispatch(signup(data))
    }
    if (isLogin) {
        return <Navigate to='/contacts'/>
    }
    return (
        <div>
            <h2>Register Page</h2>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}

export default RegisterPage;