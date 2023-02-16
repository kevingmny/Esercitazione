//funzione "fetchUserData()"" perchè non usiamo nessun Input?
function fetchUserData(): Promise<{id: number, name: string, email: string}> {
    return new Promise((resolve, reject) => {   //perchè uso l'operatore new? 
      setTimeout(() => {
        const userData = {id: 1, name: "Giorgio Marittimo", email: "marittimo01@gmail.com"};
        resolve(userData); //la funzione "resolve()" prende in input l'oggetto
      }, 2000); //tempo in ms
    });
  }
  
  async function main() {
    console.log("Start fetching user data...");
    try {   //serve a gestire i dati
      const userData = await fetchUserData();
      console.log("User data:");
      console.log(userData);
    } catch (error) {   //serve a gestire eventuali errori
      console.error("Error fetching user data:", error);
    }
    console.log("Finished fetching user data.");
  }
  
  main();
  