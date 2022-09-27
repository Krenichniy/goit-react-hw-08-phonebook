import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styled from 'styled-components';


   


 const Homepage = () => {
    const showValidationMessage = (message) => {
      Notify.warning(message);
  }

    return ( 
          <Container>
            <Form  onNotValid={ showValidationMessage} />
            <Filter />
            <ContactsList  />
      </Container>
    )
}

const Container = styled.div`
          height: 100vh;
          color: #010101;
          text-align:center;
`

export default Homepage;