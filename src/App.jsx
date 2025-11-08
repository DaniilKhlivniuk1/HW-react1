import { FeedbackProvider } from "./context/FeedbackContext.jsx";
import { ContactsProvider } from "./context/ContactsContext.jsx";

// Компоненти Feedback
import { Section } from "./components/Section/Section.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";

// Компоненти Phonebook
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";

import { GlobalStyles } from "./GlobalStyles.js";
import { Box, Title1, Title2 } from "./App.js";

const App = () => {
  return (
    <>
      <GlobalStyles />

      {/* Секція Feedback */}
      <FeedbackProvider>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["Good", "Neutral", "Bad"]} />
        </Section>

        <Section title="Statistics">
          <Statistics />
        </Section>
      </FeedbackProvider>

      <p>_______________________________________________________________________</p>

      {/* Секція Phonebook */}
      <ContactsProvider>
        <Box>
          <Title1>Phonebook</Title1>
          <ContactForm />

          <Title2>Contacts</Title2>
          <Filter />
          <ContactList />
        </Box>
      </ContactsProvider>
    </>
  );
};

export default App;
