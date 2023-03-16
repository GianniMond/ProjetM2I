import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPerson.css';

const AddPerson = ({ contacts, setContacts }) => {


    let navigate = useNavigate();

    const handleSubmit = (e) => {

        function getMaxIndex(contacts) {
            let maxIndex = contacts[0].index
            for (let i = 1; i < contacts.length; i++) {
                if (contacts[i].index > maxIndex) {
                    maxIndex = contacts[i].index
                }
            }
            return maxIndex + 1
        }


        e.preventDefault();
        setContacts([...contacts,
        {
            index: getMaxIndex(contacts),
            nom: e.target.nom.value,
            prenom: e.target.prenom.value,
            email: e.target.email.value,
            tel: e.target.tel.value
        }

        ]);
        e.target.reset();
        return navigate("/list")
    }



    return (

        <div className='container'>
                <h1>Formulaire d'enregistrement de contact : </h1>
                <form onSubmit={handleSubmit} >
                    <div className="form-control bordure">

                        <div className="mb-3 top">
                            <label htmlFor="nom">Nom : </label>
                            <input type="text" name='nom' id="nom" className='form-control' required />
                        </div>

                        <div className="mb-3 top">
                            <label htmlFor="prenom">Prenom : </label>
                            <input type="text" name='prenom' id="prenom" className='form-control' required />
                        </div>

                        <div className="mb-3 top">
                            <label htmlFor="email">Email : </label>
                            <input type="email" name='email' id="email" className='form-control' required />
                        </div>
                        <div className="mb-3 top">
                            <label htmlFor="tel">Téléphone : </label>
                            <input type="tel" name='tel' id="tel" className='form-control' required />
                        </div>
                        <button className='btn btn-light' type="submit" >Valider</button>

                    </div>

                </form>
            
        </div>
    )
}


export default AddPerson;