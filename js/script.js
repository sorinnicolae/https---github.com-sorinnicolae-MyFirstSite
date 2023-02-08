console.log("Hello world");

var a = 5;

console.log(a);

a = 8;

var a = 13;
var b = 4;

console.log(a % b);

var s = a + b;

a = 20;
a = a + 1;
a++;
a--;
a = 20.5;
console.log(typeof a);

var numePrenume = "Sorin Nicolae"
var numeprenume;

var b = true;

console.log(numePrenume);


var academie = "SDAcademy";
console.log(academie[2]);

console.log(academie.indexOf("Acr"));
console.log(academie.length);

console.log(academie[academie.length - 1]);

console.log("Substringul este: " + academie.substring(2, 9));

var text = "Marți, compania care a devenit primul Unicorn românesc, a vândut acțiuni la prețul de 56 de dolari pe unitate, preț care este peste valoarea de 52-54 de dolari propusă pentru oferta publică inițială. La cea mai recentă rundă de investiții, din 1 februarie, compania era evaluată la 35 de miliarde de dolari, iar cotația actuală aste de 62,28 dolari pe acțiune, cu peste 6 dolari mai mult față de prețul cu care a vândut UiPath acțiuni.";

console.log("Lungimea stringului este: " + text.length);
console.log("Pozitia primei virgule este: " + text.indexOf(","));

var uni = "Unicorn";

var u = text.substring(text.indexOf(uni), text.indexOf(uni) + uni.length);
console.log(u);

a = 10;
b = 5;

console.log(a > b);
console.log(a != b);

a = 5;
b = "5";

console.log(a == b);

a = 10;
b = 10;

if (a > b) {
    console.log("A este mai mare decat B");
} else {
    if (b > a) {
        console.log("B este mai mare decat A");
    } else {
        console.log("A este egal cu B");
    }
}

var zi = 8;

switch (zi) {
    case 1:
        console.log("Luni");
        break;
    case 2:
        console.log("Marti");
        break;
    case 3:
        console.log("Miercuri");
        break;
    case 4:
        console.log("Joi");
        break;
    case 5:
        console.log("Vineri");
        break;
    case 6:
        console.log("Sambata");
        break;
    case 7:
        console.log("Duminica");
        break;
    default:
        alert("Nu exista ziua cu numarul" + zi);
        break;

}

function suma(x, y) {
    var s = x + y;
    return s;
}

console.log(suma(4, 5));

var sum = suma(7, 8);
console.log(s);

function comparatie(a, b) {
    if (a > b) {
        return (a);
    }
    else if (b > a) {
        return (b);
    }
    else { return ("Numerele sunt egale") }
}
console.log(comparatie(5, 5));

function rez(a, b) {
    if (a > b) {
        console.log(a);
    }
    else if (b>a) {

    }
    else{
    console.log(b);
}
}
rez(3, 3);

function f(y){
    return y+2;
}
function e(x){
    return f(x) * 2;
}

console.log(f(5));
console.log(e(6));

function arie(forma, a, b, c){
    var rezultat;
    switch(forma){
        case "triunghi":
            rezultat = a * b / 2;
            break;
        case "dreptunghi":
            rezultat = a * b;
            break;
        case "trapez":
            rezultat = (a + b) * c / 2;
            break;
    }
    return rezultat;
}
console.log("Aria tringhiului este: " + arie("triunghi", 4, 5));
console.log("Aria dreptunghiului este: " + arie("dreptunghi", 6, 8));
console.log("Aria trapezului este: " + arie("trapez", 3, 5, 7));








