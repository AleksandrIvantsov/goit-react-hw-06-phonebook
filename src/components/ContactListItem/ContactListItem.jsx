import { Button } from 'components/ContactForm/ContactForm.styled';
import { Span } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <Span>
        {contact.name}: {contact.number}
      </Span>
      <Button
        type="button"
        onClick={handleDelete}
        onMouseDown={e => (e.target.style.backgroundColor = '#3e7fe9')}
        onMouseUp={e => (e.target.style.backgroundColor = 'transparent')}
      >
        Delete
      </Button>
    </>
  );
};