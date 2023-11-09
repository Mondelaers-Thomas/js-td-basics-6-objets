/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/
const john = {
    nom: 'John',
    poids: 80,
    taille: 1.70,

    bmiJohn: function(){
        return this.bmi = (this.poids / (this.taille * this.taille)).toFixed(2);
    }
};
const mark = {
    nom: 'mark',
    poids: 60,
    taille: 1.80,

    bmiMark: function () {
        return this.bmi = (this.poids / (this.taille * this.taille)).toFixed(2);
    }
};
if(john.bmiJohn() === mark.bmiMark()){
    console.log(`${john.nom} et ${mark.nom} ont un bmi de ${john.bmiJohn()}`);
} else if(john.bmiJohn() > mark.bmiMark()){
    console.log(`${john.nom}(${john.bmiJohn()}) a un bmi plus élevé que ${mark.nom}(${mark.bmiMark()})`);
} else {
    console.log(`${mark.nom}(${mark.bmiMark()}) a un bmi plus élevé que ${john.nom}(${john.bmiJohn()})`);
}