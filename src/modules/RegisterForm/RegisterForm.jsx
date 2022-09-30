import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import useForm from '../../helpers/hooks/useForm'
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/conatcts-operations';


const RegisterForm = ({ onSubmit }) => {
    const initialState = {
        name: '',
        email: '',
        password:''
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const { name, email, password } = state;



//    const handleChange= (event) => {
//        const { name, value } = event.currentTarget;
//        if (name === 'name') {
//            setName(value);
//        } else if (name === 'mail') {
//            setMail(value)
//        } else {
//            setPass(value);
//        }
//     }  

  
    // const formValidation = ( event)=> {
    //     event.preventDefault();
    //     const name = userName;
    //     const password = userPass;
    //     const email = userMail;
    //     if (!name || !password || !email) return Notify.warning('Please fill all fields');
        
    //     const newUser = { name, email, password };
       
    //     console.log(newUser);
    //     dispatch(signup( newUser))
    //     // onRegister(newUser);
    //     // dispatch(addContact(newContact));
    //     reset();
    // }

    // const reset = ()=> {
    //     setName('');
    //     setPass('');
    //     setMail('');
    // }

        return (
            <>
            <Container>
                <Header>Register Form</Header>
                <FormContainer onSubmit={handleSubmit}>
                    <LabelContainer >
                        Name
                        <UserInput
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange} />
                    </LabelContainer>
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
    
    RegisterForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
export default RegisterForm;