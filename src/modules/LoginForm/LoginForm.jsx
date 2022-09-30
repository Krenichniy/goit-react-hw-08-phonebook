import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from '../RegisterForm/RegisterForm.styled';
import useForm from '../../helpers/hooks/useForm'



const LoginForm = ({onSubmit }) => {
  const initialState = {
        email: '',
        password:''
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const {  email, password } = state;
 


        return (
            <>
            <Container>
                <Header>Login Form</Header>
                <FormContainer onSubmit={handleSubmit}>
                    <LabelContainer >
                        Email
                        <UserInput
                            type="email"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title="Enter your email Please!"
                            required
                            value={email}
                            onChange={handleChange} />
                        </LabelContainer>

                    <LabelContainer >
                        Password
                        <UserInput
                            type="password"
                            name="password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            title="Minimum eight characters, at least one letter and one number"
                            required
                            value={password}
                            onChange={handleChange} />
                        </LabelContainer>
                        <StyledBtn type='submit'>Register</StyledBtn>
                        </FormContainer>
                    </Container>
                </>
        )
}
    
    LoginForm.propTypes = {
        onSubmit: PropTypes.func,
    };
export default LoginForm;