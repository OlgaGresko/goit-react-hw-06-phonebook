import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export default function ContactList() {
  


  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <ContactListItem contact={contact} key={contact.id} />
          
        );
      })}
    </ul>
  );
}

