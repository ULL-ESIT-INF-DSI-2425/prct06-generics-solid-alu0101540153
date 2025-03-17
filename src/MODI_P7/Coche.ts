import { Observer } from './Observable.js';
import { WeatherStation } from './WeatherStation.js';

/**
 * Clase que representa un dispositivo mvil.
 * recibe las actualizaciones de la estación meteorolgica.
 */
export class Coche implements Observer {
  constructor(private id: number, private name: string) {}

  /**
   *  getter
   * @returns id 
   */
  getId() {
    return this.id;
  }

    /**
   *  getter
   * @returns name
   */
  getName() {
    return this.name;
  }

  /**
   * funcion que se encarga de actualizar la temperatura de un coche
   * @param observable - 
   */
  update(observable: WeatherStation) {
    console.log(`Coche ${this.name}: La temperatura en ${observable.getName()} es ${observable.getTemperature()}°C`);
  }
}
