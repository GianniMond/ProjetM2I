import React, { useState } from 'react';
import './NavBar.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import Home from '../../views/HomeView/Home';
import List from '../../views/ListView/List';
import AddPerson from '../../views/AddPersonView/AddPerson';
import { contactsList } from '../../data/contactslist';


const NavBar = () => {
    const [contacts, setContacts] = useState(contactsList)
    return (
        <div>

            {/* Insertion du routeur */}
            <BrowserRouter>
                <div className="navbar">

                    {/* Definition des liens */}

                    <button className='bouton'>
                        <Link to="/">Accueil</Link>
                    </button>

                    <button className='bouton'>
                        <Link to="/list">Liste des contacts</Link>
                    </button>

                    <button className='bouton'>
                        <Link to="/addPerson">Ajouter un contact</Link>
                    </button>

                </div>

                {/* Creation des Routes */}
                <Routes>
                    <Route path='/' element={<Home contacts={contacts} setContacts={setContacts} />} />
                    <Route path='/list' element={<List contacts={contacts} setContacts={setContacts} />} />
                    <Route path='/addPerson' element={<AddPerson contacts={contacts} setContacts={setContacts} />} />
                </Routes>
            </BrowserRouter>

            {/* Full Execution*/}
            <Outlet />
        </div>
    );
};

export default NavBar;