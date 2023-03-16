import React from 'react';
import './List.css';

const List = ({contacts, setContacts}) => {


  const handleDeleteClick = (index) => {

setContacts(contacts.filter( contact => contact.index !== index))
  }

 

  return (
    <div className='container'>
      <table class="table">
        <thead>
          <tr>
            <th scope="row">#</th>
            <th scope="row">Nom</th>
            <th scope="row">Prenom</th>
            <th scope="row">Email</th>
            <th scope="row">Telephone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact =>
            <tr>
              <th scope="col" key={contact.index}>{contact.index}</th>
              <td key={contact.nom}>{contact.nom}</td>  
              <td key={contact.prenom}>{contact.prenom}</td>
              <td key={contact.email}>{contact.email}</td>
              <td key={contact.tel}>{contact.tel}</td>
              <td><button onClick={() =>
              handleDeleteClick(contact.index)}><i class="fa-solid fa-trash"></i></button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;