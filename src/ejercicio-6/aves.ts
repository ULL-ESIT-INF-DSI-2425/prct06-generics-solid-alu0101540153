// Clase base para todas las aves
abstract class Bird {
    abstract makeSound(): void;
  }
  
  // Interfaz para aves que pueden volar
  interface Flyable {
    fly(): void;
  }
  
  // Gorriones pueden volar, por lo que implementan Flyable
  class Sparrow extends Bird implements Flyable {
    makeSound(): void {
      console.log("Chirp chirp!");
    }
  
    fly(): void {
      console.log("Sparrow flying...");
    }
  }
  
  // Pingüinos no implementan Flyable
  class Penguin extends Bird {
    makeSound(): void {
      console.log("Honk honk!");
    }
  
    swim(): void {
      console.log("Penguin swimming...");
    }
  }
  
  // Código cliente
  const sparrow = new Sparrow();
  sparrow.makeSound();
  sparrow.fly(); // ✅ Puede volar
  
  const penguin = new Penguin();
  penguin.makeSound();
  penguin.swim(); // ✅ No tiene método fly(), así que no rompe el programa
  