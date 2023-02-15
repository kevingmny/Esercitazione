var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ESERCIZIO 1
function mostraTesto() {
    var testoElement = document.getElementById("testo");
    if (testoElement) {
        testoElement.innerHTML = "<h1>Ciao Mondo!</h1><p>Questa è un esercitazione utilizzando HTML, TypeScript e GitHub</p>";
    }
}
var buttonElement = document.querySelector("button");
if (buttonElement) {
    buttonElement.addEventListener("click", mostraTesto);
}
//ESERCIZIO 2
function calcola() {
    var numero1Element = document.getElementById("numero1");
    var numero2Element = document.getElementById("numero2");
    var risultatoElement = document.getElementById("risultato");
    var numero1 = Number(numero1Element.value);
    var numero2 = Number(numero2Element.value);
    //a cosa serve?
    if (isNaN(numero1) || isNaN(numero2)) {
        risultatoElement.innerHTML = "Inserisci due numeri validi";
        return;
    }
    var risultato;
    if (numero1 > 0 && numero2 > 0) {
        var somma = numero1 + numero2;
        risultato = "I due numeri sono positivi. La somma \u00E8 ".concat(somma, ".");
    }
    else if (numero1 < 0 && numero2 < 0) {
        var prodotto = numero1 * numero2;
        risultato = "I due numeri sono negativi. Il prodotto \u00E8 ".concat(prodotto, ".");
    }
    else {
        var differenza = Math.abs(numero1 - numero2);
        var segnoNumero1 = numero1 > 0 ? "positivo" : "negativo";
        var segnoNumero2 = numero2 > 0 ? "positivo" : "negativo";
        risultato = "Un numero \u00E8 ".concat(segnoNumero1, " e l'altro \u00E8 ").concat(segnoNumero2, ". La differenza \u00E8 ").concat(differenza, ".");
    }
    var multipli = [];
    for (var i = 1; i <= 10; i++) {
        multipli.push(i * numero1);
    }
    var multipliStringa = multipli.join(", ");
    risultato += " I primi 10 multipli di ".concat(numero1, " sono: ").concat(multipliStringa, ".");
    risultatoElement.innerHTML = risultato;
}
//ESERCIZIO 3
var Course = /** @class */ (function () {
    function Course(title, instructor, creditHours) {
        this.title = title;
        this.instructor = instructor;
        this.creditHours = creditHours;
    }
    return Course;
}());
var EducationCenter = /** @class */ (function () {
    function EducationCenter(name, location) {
        this.name = name;
        this.location = location;
        this.courses = [];
    }
    EducationCenter.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return EducationCenter;
}());
var myEducationCenter = new EducationCenter("Centro Marittimi", "Catania");
myEducationCenter.addCourse(new Course("Corso Radar", "Mario Rossi", 3));
myEducationCenter.addCourse(new Course("Corso Sopravvivenza", "Giuseppe Verdi", 4));
console.log("Centro Formazione: ".concat(myEducationCenter.name, ", ").concat(myEducationCenter.location));
myEducationCenter.courses.forEach(function (course) {
    console.log("Corso: ".concat(course.title, ", Istruttore: ").concat(course.instructor, ", Ore di credito: ").concat(course.creditHours));
});
//ESERCIZIO 4
var Seafarer = /** @class */ (function () {
    function Seafarer(name, yearsOfExperience) {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
    }
    Seafarer.prototype.getExperience = function () {
        return this.yearsOfExperience;
    };
    return Seafarer;
}());
var CertifiedSeafarer = /** @class */ (function (_super) {
    __extends(CertifiedSeafarer, _super);
    function CertifiedSeafarer(name, yearsOfExperience, certification, expiryDate) {
        var _this = _super.call(this, name, yearsOfExperience) || this;
        _this.certification = certification;
        _this.expiryDate = expiryDate;
        return _this;
    }
    CertifiedSeafarer.prototype.isCertified = function () {
        return new Date() < this.expiryDate;
    };
    return CertifiedSeafarer;
}(Seafarer));
var seafarers = [
    new CertifiedSeafarer("Giovanni Blu", 5, "Certificato X1", new Date("2023-06-30")),
    new CertifiedSeafarer("Francesco Giallo", 2, "Certificato X2", new Date("2022-12-31"))
];
seafarers.forEach(function (seafarer) {
    console.log("Seafarer: ".concat(seafarer.name, ", Years of Experience: ").concat(seafarer.getExperience()));
    if (seafarer instanceof CertifiedSeafarer) {
        console.log("Certification: ".concat(seafarer.certification, ", Expiry Date: ").concat(seafarer.expiryDate));
        console.log("Certified? ".concat(seafarer.isCertified()));
    }
});
