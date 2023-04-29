import GlobalStyle from 'components/GlobalStyles';
import { AppCont, HeadingPage, HeadingSection } from './App.styled';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  return (
    <AppCont>
      <HeadingPage>Phonebook</HeadingPage>
      <ContactForm />

      <HeadingSection>Contacts</HeadingSection>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
