//exo 1
var age = 50;
var nom = 'tatata';
var est = true;
//exo 2 
function addition(nombre1, nombre2) {
    return (nombre1 + nombre2);
}
//exo 3 
var listeNombre = [124, 33, 345423, 543534];
for (var i = 0; i < listeNombre.length; i++) {
    console.log(listeNombre[i]);
}
var corentin = {
    age: 17,
    nom: "sanjuan",
    email: "corentin.sanjuan@gmail.com"
};
console.log(corentin);
// exo 5
var Personne = /** @class */ (function () {
    function Personne(age, nom) {
        this.nom = nom;
        this.age = age;
    }
    Personne.prototype.sePresenter = function () {
        console.log('je m\'appele ' + this.nom, 'et j\'ai ' + this.age, 'ans');
    };
    return Personne;
}());
var personne1 = new Personne(25, "oui");
personne1.sePresenter();
var Rectangle = /** @class */ (function () {
    function Rectangle(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
    Rectangle.prototype.calculeSurface = function () {
        console.log(this.hauteur * this.largeur);
    };
    return Rectangle;
}());
var rectange1 = new Rectangle(45, 34);
rectange1.calculeSurface();
var voiture = {
    marque: "Mercedes",
    année: "2030",
    couleur: "blouge"
};
console.log(voiture);
var personne4 = {
    nom: "pierre",
    age: "45",
    adresse: "16 TER"
};
console.log(personne4);
var monChien = {
    race: "chein",
    nom: "oui"
};
var id = 224242;
console.log(id);
