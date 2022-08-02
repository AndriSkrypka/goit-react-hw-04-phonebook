import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Form.module.css';



export const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerCreate = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const id = nanoid();

    const contact = { name, number, id };

    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form} >
      <label className={css.label}>
        Name
        <input
          className={css.input1}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlerCreate}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input2}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlerCreate}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};



// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from './Form.module.css';



// export class Form extends Component {
//   static propTypes = {
//     addContact: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handlerCreate = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     const id = nanoid();
//     const contact = { ...this.state, id };
//     this.props.addContact(contact);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.form} onSubmit={this.onSubmit}>
//         <label className={css.label}>
//           Name
//           <input
//             className={css.input1}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handlerCreate}
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             className={css.input2}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handlerCreate}
//           />
//         </label>
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }