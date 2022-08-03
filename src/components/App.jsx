import { useEffect, useState } from 'react';

import { Form } from './Form/Form';

import Section from './Section/Section';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';




const contactKeys = 'contacts-list';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem(contactKeys)
      ? JSON.parse(localStorage.getItem(contactKeys))
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(contactKeys, JSON.stringify(contacts));
  }, [contacts]);

  const handlerFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const getContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const handlerDelete = id => {
    setContacts(contacts.filter(contact => id !== contact.id));
  };

  const handlerSubmit = data => {
    const inContacts = contacts.some(
      contact =>
        data.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );
    if (inContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, data]);
  };

  return (
    <div
      style={{
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Form onSubmit={handlerSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} handlerFilter={handlerFilter} />
        <ContactList contacts={getContacts()} onDelete={handlerDelete} />
      </Section>
    </div>
  );
};

export { App };


