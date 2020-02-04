import React from 'react';
import {Link} from 'react-router-dom'
import './description.css'

function DescriptionSherlock() {
  return (
    <div className="Description-Format">
    <div className="Description">
      <h1>SYNOPSIS ET DÉTAILS</h1>
        <p>Aucune énigme ne résiste longtemps à Sherlock Holmes... Flanqué de son fidèle ami le Docteur John Watson, l'intrépide et légendaire détective traque sans relâche les criminels de tous poils. Ses armes : un sens aigu de l'observation et de la déduction, une érudition et une curiosité tous azimuts; accessoirement, une droite redoutable...
        Mais une menace sans précédent plane aujourd'hui sur Londres - et c'est exactement le genre de challenge dont notre homme a besoin pour ne pas sombrer dans l'ennui et la mélancolie.
        Après qu'une série de meurtres rituels a ensanglanté Londres, Holmes et Watson réussissent à intercepter le coupable : Lord Blackwood. A l'approche de son éxécution, ce sinistre adepte de la magie noire annonce qu'il reviendra du royaume des morts pour exercer la plus terrible des vengeances.
        La panique s'empare de la ville après l'apparente résurrection de Blackwood. Scotland Yard donne sa langue au chat, et Sherlock Holmes se lance aussitôt avec fougue dans la plus étrange et la plus périlleuse de ses enquêtes...</p>
        </div>
        <div><Link to='/'>Home</Link></div>
    </div>
  );
}

export default DescriptionSherlock;