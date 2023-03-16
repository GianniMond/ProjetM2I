import React from 'react';
import './Home.css';
import {
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import AddPerson from '../AddPersonView/AddPerson';

const Home = ({ contacts, setContacts }) => {
    return (
        <div className='container'>
            <div className="row">

                <h1>Bienvenue sur le site dédié aux listes de contact !</h1>
                <div className="col-6 right">
                    <h2>Contacts existants...</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>

                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact =>
                                <tr>
                                    <th scope="row">{contact.index}</th>
                                    <td>{contact.nom}</td>
                                    <td>{contact.prenom}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-6 left">
                    <h2>Vous voulez nous rejoindre ?</h2>
                  
                        <button id ="pos"className='boutons'>
                            <Link to="/addPerson"><i class="fa-solid fa-file-signature" id='icon-size'></i></Link>
                        </button>
                        <Routes>

                            <Route path='/addPerson' element={<AddPerson contacts={contacts} setContacts={setContacts} />} />
                        </Routes>
                        <Outlet />

                </div>
            </div>
        </div>
    );
};

export default Home;