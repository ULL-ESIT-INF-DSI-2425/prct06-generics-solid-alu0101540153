import * as fs from "fs";

// Interfaz para diferentes tipos de almacenamiento (archivo, base de datos, etc.)
interface IStorage {
  read(): string;
  write(data: string): void;
}

// Clase para manejar archivos
class FileStorage implements IStorage {
  constructor(private filePath: string) {}

  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      throw new Error("Error al leer el archivo");
    }
  }

  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      throw new Error("Error al escribir en el archivo");
    }
  }
}

// Clase independiente para manejar logs (SRP)
class Logger {
  public static log(message: string): void {
    console.log(message);
  }
}

// Cliente que usa almacenamiento sin acoplarse a una implementación específica
class FileManager {
  constructor(private storage: IStorage) {}

  public readFile(): void {
    try {
      const content = this.storage.read();
      Logger.log(`Contenido actual: ${content}`);
    } catch (error) {
      Logger.log(error.message);
    }
  }

  public writeFile(data: string): void {
    try {
      this.storage.write(data);
      Logger.log("Archivo escrito exitosamente.");
    } catch (error) {
      Logger.log(error.message);
    }
  }
}

// Uso del FileManager con almacenamiento basado en archivos
const fileStorage = new FileStorage("example.txt");
const fileManager = new FileManager(fileStorage);

// Operaciones
fileManager.readFile();
fileManager.writeFile("Nuevo contenido en el archivo");
fileManager.readFile();
