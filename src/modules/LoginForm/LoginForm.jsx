import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from '../RegisterForm/RegisterForm.styled';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/conatcts-operations';


const LoginForm = ({onNotValid }) => {
    const [userMail, setMail] = useState('');
     const [userPass, setPass] = useState('');
    // const dispatch = useDispatch();
 


   const handleChange= (event) => {
       const { name, value } = event.currentTarget;
         if (name === 'mail') {
                setMail(value)
            } else {
                setPass(value);
            }
    }  

  
    const formValidation = ( event, showMessage)=> {
        event.preventDefault();
        const password = userPass;
        const email = userMail;
        if ( !password || !email) return showMessage('Please fill all fields');
        
        const LoggedUser = { email, password };
        console.log(LoggedUser)
        // dispatch(addContact(newContact));
        reset();
    }

    const reset = ()=> {
        setPass('');
        setMail('');
    }

        return (
            <>
            <Container>
                <Header>Login Form</Header>
                <FormContainer onSubmit={(event) => {formValidation(event, onNotValid)}}>
                    <LabelContainer >
                        Email
                        <UserInput
                            type="email"
                            name="mail"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title="Enter your email Please!"
                            required
                            value={userMail}
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
                            value={userPass}
                            onChange={handleChange} />
                        </LabelContainer>
                        <StyledBtn type='submit'>Register</StyledBtn>
                        </FormContainer>
                    </Container>
                </>
        )
}
    
    LoginForm.propTypes = {
        onNotValid: PropTypes.func,
    };
export default LoginForm;