import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
   return (
      <main className="error_wrapper">
         <h1 className="error_number">Erreur</h1>
         <h2 className="error_description">
            La page que vous recherchez n'existe pas.
         </h2>
         <Link className="error_homelink" to="/">
            Retourner sur la page d'accueil
         </Link>
      </main>
   );
}

export default Error;
