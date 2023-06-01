import React from "react"

// les props sont un parametre optionnel qu'on peut passer a un composant React
// elles constutent un objet qui contient notamment des proprietes que l'on peut choisir.

 

function MyComponent(props) {
    console.log(props.test);
    return (
        <>
            <h1>props</h1>
        </>
    )
 }

 export default MyComponent
