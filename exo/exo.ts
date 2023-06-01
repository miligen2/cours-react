//exo 1
const age: number = 50; 
const nom: string = 'tatata'
const est: boolean = true

//exo 2 


function addition(nombre1:number,nombre2:number) {
    return(nombre1+nombre2)
}

//exo 3 
let listeNombre : number[] = [124 ,33, 345423, 543534]

for (let i = 0; i < listeNombre.length; i++) {
   console.log(listeNombre[i]);
}
// EXO 4 

interface utilisateur {
    age:number;
    nom:string;
    email:string;
}
const corentin :utilisateur = {
 age:17,
 nom: "sanjuan",
 email: "corentin.sanjuan@gmail.com"
}
console.log(corentin);

// exo 5

class Personne  {
    age: number;
    nom: string;

    constructor (age:number,nom:string){
        this.nom =nom;
        this.age= age;
    }

    sePresenter(){
        console.log('je m\'appele ' + this.nom ,'et j\'ai ' + this.age, 'ans');
    }
}
const personne1: Personne = new Personne(25,"oui")
personne1.sePresenter()

//exo 6

interface Forme {
    hauteur:number;
    largeur:number;
}

class Rectangle implements Forme {
    hauteur:number;
    largeur:number;

    constructor (hauteur:number, largeur:number){
        this.hauteur=hauteur;
        this.largeur=largeur;
    }

    calculeSurface(){
        console.log(this.hauteur * this.largeur)
    }

}
const rectange1:Rectangle = new Rectangle(45,34)
rectange1.calculeSurface()


//interface-types.md exo1
interface Vehicule{
    marque:string
    année:string
    couleur:string
}

const voiture:Vehicule ={
    marque: "Mercedes",
    année:"2030",
    couleur:"blouge"
}
console.log(voiture)

//exo 2 
type user = {
    nom: string
    age:string
    adresse: string
}
const personne4:user ={
    nom:"pierre",
    age:"45",
    adresse:"16 TER"

}
console.log(personne4)
//ex 3
interface animal{
    nom:string
}
interface chien extends animal{
    race:string
}
const monChien:chien = {
    race:"chein",
    nom:"oui"
}
//ex 4 
type indentidiant = string | number;
const id:indentidiant = 224242
console.log(id)

//ex 5 
interface calcul {
    a:number;
    b:number;

}
const calculatrice:calcul = {

}
