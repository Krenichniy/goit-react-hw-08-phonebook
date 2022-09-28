import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/conatcts-operations';


const RegisterForm = ({onNotValid }) => {
    const [userName, setName] = useState('');
    const [userMail, setMail] = useState('');
     const [userPass, setPass] = useState('');
    // const dispatch = useDispatch();
 


   const handleChange= (event) => {
       const { name, value } = event.currentTarget;
        // switch (name) {
        //     case "name":
        //         setName(value);
        //         break;
        //     case "mail":
        //         setMail(value);
        //         break;
        //     case "password":
        //         setPass(value);
        //         break;
        //     default: setName(value)
        //         break;
        // }
       if (name === 'name') {
           setName(value);
       } else if (name === 'mail') {
           setMail(value)
       } else {
           setPass(value);
       }
    }  

  
    const formValidation = ( event, showMessage)=> {
        event.preventDefault();
        const name = userName;
        const password = userPass;
        const email = userMail;
        if (!name || !password || !email) return showMessage('Please fill all fields');
        
        const newUser = { name, email, password };
        console.log(newUser)
        // dispatch(addContact(newContact));
        reset();
    }

    const reset = ()=> {
        setName('');
        setPass('');
        setMail('');
    }

        return (
            <>
            <Container>
                <Header>Register Form</Header>
                <FormContainer onSubmit={(event) => {formValidation(event, onNotValid)}}>
                    <LabelContainer >
                        Name
                        <UserInput
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={userName}
                            onChange={handleChange} />
                    </LabelContainer>
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
    
    RegisterForm.propTypes = {
        onNotValid: PropTypes.func,
    };
export default RegisterForm;