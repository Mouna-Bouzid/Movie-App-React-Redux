import React from 'react';
import {Link} from 'react-router-dom'
import './description.css'

function DescriptionJulia() {
  return (
    <div className="Description-Format">
    <div className="Description">
      <h1>SYNOPSIS ET DÉTAILS</h1>
        <p>
          Quand Julia apprend la mort soudaine de sa sœur Sara, tout semble clairement indiquer qu’elle s’est suicidée. Mais Julia n’arrive pas à accepter cette version des faits et commence à passer au crible les événements qui ont eu lieu les derniers mois avant le drame. La découverte d’éléments déconcertants, en désaccord avec la personnalité de Sara, et sa rupture de contacts avec son entourage, ne font que nourrir les soupçons de Julia quant aux circonstances réelles du décès. Décidée à résoudre l’énigme de cette ultime période, Julia devient l’objet d’une singulière menace qu’aucune autre personne autour d’elle, y compris son mari Isaac, ne semble percevoir, alors même que la maladie dégénérescente dont elle souffre prend le dessus, la plongeant petit à petit dans l’obscurité. La compréhension et l’amour d’Isaac avaient jusqu’alors eu raison des attaques de cécité de Julia, mais une série d’incidents inquiétants, et toujours plus violents, menacent son équilibre, l’enfermant inexorablement dans le monde des ténèbres, à la merci de la présence terriffiante qui s’y terre...
        </p>
        </div>
        <div><Link to='/'>Home</Link></div>
    </div>
  );
}

export default DescriptionJulia;