// Separamos las interfaces en dos responsabilidades distintas
export interface Printable {
    print(): void;
  }
  
  export interface Scannable {
    scan(): void;
  }
  
  // Ahora, las clases solo implementan la interfaz que realmente necesitan
  export class Printer implements Printable {
    print(): void {
      console.log("Printing...");
    }
  }
  
  export class Scanner implements Scannable {
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  // Una impresora multifunción puede implementar ambas interfaces
  export class PrinterScanner implements Printable, Scannable {
    print(): void {
      console.log("Printing...");
    }
  
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  // Client code
  const printer = new Printer();
  printer.print(); // ✅ Printing...
  
  const scanner = new Scanner();
  scanner.scan(); // ✅ Scanning...
  
  const printerScanner = new PrinterScanner();
  printerScanner.print(); // ✅ Printing...
  printerScanner.scan(); // ✅ Scanning...
  