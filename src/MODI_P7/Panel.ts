import { Observer } from './Observable.js';
import { WeatherStation } from './WeatherStation.js';

/**
 * Clase que representa un panel de visualización.
 * Recibe las actualizaciones de la estación meteorológica.
 */
export class PanelDevice implements Observer {
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
   * funcion que se encarga de actualizar la temperatura de un panel
   * @param observable - lo q observa
   */
  update(observable: WeatherStation) {
    console.log(`Panel de visualización ${this.name}: La temperatura en ${observable.getName()} es ${observable.getTemperature()}°C`);
  }
}
