import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/conatcts-operations';
const PhoneBook = () => {
 const dispatch = useDispatch();

    const onAddContact = (data) => {
        dispatch(addContact(data))
    }
        return (
          <Container>
            <Form  onSubmit={ onAddContact} />
            <Filter />
            <ContactsList  />
      </Container>
    );
};


const Container = styled.div`
          height: 100vh;
          color: #010101;
          text-align:center;
`

export default PhoneBook;