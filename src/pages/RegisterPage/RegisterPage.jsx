import RegisterForm from '../../modules/RegisterForm/RegisterForm'
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';
const RegisterPage = () => {
    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(signUp(data))
    }
    return (
        <div>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}

export default RegisterPage;