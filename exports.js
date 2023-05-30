// les imports et les exports permettent de strucutrer les ficheiers js en modules

// par defaut javascript execute ce qu'on appelle le 'global scope' le contenu du code 
// provenant d'un fichier est automatiquement disponible au sein d'un autre fichier 


// .js .ts .jsx .tsx

// on peut considerer qu'un fichier js est un module des qu'il contient un 'export'

function myFucA () {
    console.log('A')
}
function myFucB () {
    console.log('B')
}
function myFucC () {
    console.log('C')
    
}

export {myFucA,myFucB,myFucC}; //sytaxe des l'export nomme
