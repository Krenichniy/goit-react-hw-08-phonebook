import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './Form.styled';
import useForm from '../../helpers/hooks/useForm';


const Form = ({ onSubmit }) => {
    
     const initialState = {
        name: '',
        number:''
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const {  name, number } = state;

        return (
            <>
            <Container>
                <Header>Phonebook</Header>
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
                        Phone Number
                        <UserInput
                            type="tel"
                            name="number"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                            title="Tel may contain only numbers. For example 654-59-78"
                            required
                            value={number}
                            onChange={handleChange} />
                        </LabelContainer>
                        <StyledBtn type='submit'>Add contact</StyledBtn>
                        </FormContainer>
                    </Container>
                </>
        )
}
    
    Form.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
export default Form;