import { useEffect, useState } from "react";

function ListeUtilisateurs() { 
const [utilisateurs, setUtilisateurs] = useState([]);
const [chargement, setChargement] = useState(true);
const [erreur, setErreur] = useState(null);

useEffect(() => {
 // Fonction asynchrone pour charger les données
const chargerUtilisateurs = async () => {
try {
setChargement(true);
const response = await fetch('https://jsonplaceholder.typicode.com/users');

if (!response.ok) {
throw new Error('Erreur de chargement');
}
const data = await response.json();
setUtilisateurs(data);
} catch (err) {
setErreur(err.message);
} finally {
setChargement(false);
}
};
chargerUtilisateurs();
 }, []); 

if (chargement) return <p>Chargement...</p>;
if (erreur) return <p>Erreur : {erreur}</p>;

return (
<div>
<h2>Liste des utilisateurs</h2>
<ul>
{utilisateurs.map(user => (
<li key={user.id}>
{user.name} - {user.email}
</li>
))}
</ul>
</div>
);
}

export default ListeUtilisateurs;