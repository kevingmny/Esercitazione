//ESERCIZIO 1
function mostraTesto(): void {
	const testoElement = document.getElementById("testo");
	if (testoElement) {
		testoElement.innerHTML = "<h1>Ciao Mondo!</h1><p>Questa è un esercitazione utilizzando HTML, TypeScript e GitHub</p>";
	}
}

const buttonElement = document.querySelector("button");
if (buttonElement) {
	buttonElement.addEventListener("click", mostraTesto);
}

//ESERCIZIO 2
function calcola(): void {
	const numero1Element = document.getElementById("numero1") as HTMLInputElement;
	const numero2Element = document.getElementById("numero2") as HTMLInputElement;
	const risultatoElement = document.getElementById("risultato");

	const numero1 = Number(numero1Element.value);
	const numero2 = Number(numero2Element.value);

//a cosa serve?
if (isNaN(numero1) || isNaN(numero2)) {
    risultatoElement.innerHTML = "Inserisci due numeri validi";
    return;
}

let risultato: string;
if (numero1 > 0 && numero2 > 0) {
    const somma = numero1 + numero2;
    risultato = `I due numeri sono positivi. La somma è ${somma}.`;
} else if (numero1 < 0 && numero2 < 0) {
    const prodotto = numero1 * numero2;
    risultato = `I due numeri sono negativi. Il prodotto è ${prodotto}.`;
} else {
    const differenza = Math.abs(numero1 - numero2);
    const segnoNumero1 = numero1 > 0 ? "positivo" : "negativo";
    const segnoNumero2 = numero2 > 0 ? "positivo" : "negativo";
    risultato = `Un numero è ${segnoNumero1} e l'altro è ${segnoNumero2}. La differenza è ${differenza}.`;
}

const multipli: number[] = [];
for (let i = 1; i <= 10; i++) {
    multipli.push(i * numero1);
}
const multipliStringa = multipli.join(", ");
risultato += ` I primi 10 multipli di ${numero1} sono: ${multipliStringa}.`;

risultatoElement.innerHTML = risultato;
}

//ESERCIZIO 3
class Course {
    title: string;
    instructor: string;
    creditHours: number;
  
    constructor(title: string, instructor: string, creditHours: number) {
      this.title = title;
      this.instructor = instructor;
      this.creditHours = creditHours;
    }
  }
  
class EducationCenter {
name: string;
location: string;
courses: Course[];
  
constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.courses = [];
}

addCourse(course: Course) {
    this.courses.push(course);
}
}

const myEducationCenter = new EducationCenter("Centro Marittimi", "Catania");

myEducationCenter.addCourse(new Course("Corso Radar", "Mario Rossi", 3));
myEducationCenter.addCourse(new Course("Corso Sopravvivenza", "Giuseppe Verdi", 4));

console.log(`Centro Formazione: ${myEducationCenter.name}, ${myEducationCenter.location}`);
myEducationCenter.courses.forEach((course) => {
console.log(`Corso: ${course.title}, Istruttore: ${course.instructor}, Ore di credito: ${course.creditHours}`);
});

//ESERCIZIO 4
class Seafarer {
    name: string;
    yearsOfExperience: number;
  
    constructor(name: string, yearsOfExperience: number) {
      this.name = name;
      this.yearsOfExperience = yearsOfExperience;
    }
  
    getExperience(): number {
      return this.yearsOfExperience;
    }
  }
  
  class CertifiedSeafarer extends Seafarer {
    certification: string;
    expiryDate: Date;
  
    constructor(name: string, yearsOfExperience: number, certification: string, expiryDate: Date) {
      super(name, yearsOfExperience);
      this.certification = certification;
      this.expiryDate = expiryDate;
    }
  
    isCertified(): boolean {
      return new Date() < this.expiryDate;
    }
  }
  
  const seafarers: Seafarer[] = [
    new CertifiedSeafarer("Giovanni Blu", 5, "Certificato X1", new Date("2023-06-30")),
    new CertifiedSeafarer("Francesco Giallo", 2, "Certificato X2", new Date("2022-12-31"))
  ];
  
  seafarers.forEach((seafarer) => {
    console.log(`Seafarer: ${seafarer.name}, Years of Experience: ${seafarer.getExperience()}`);
    if (seafarer instanceof CertifiedSeafarer) {
      console.log(`Certification: ${seafarer.certification}, Expiry Date: ${seafarer.expiryDate}`);
      console.log(`Certified? ${seafarer.isCertified()}`);
    }
  });