import { Observable, Observer } from './Observable.js';

/**
 * Clase que representa la estación meteorológica.
 * Notifica a los dispositivos sobre eventos meteorológicos.
 */
export class WeatherStation implements Observable {
  private observers: Observer[] = [];
  private temperature: number = 20; // Temperatura inicial

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
    return this.name
  }

       /**
   *  getter
   * @returns temperatura
   */
  getTemperature() {
    return this.temperature;
  }

     /**
   *  setter
   * @param temp - temperatura a setear
   */
  setTemperature(temp: number) {
    this.temperature = temp;
    this.notify(); 
  }

  /**
   * funcion para asociar un observador
   * @param observer -
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('El observador ya está suscrito');
    } else {
      this.observers.push(observer);
    }
  }

    /**
   * funcion para des asociar un observador
   * @param observer -
   */
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('El observador no está suscrito');
    } else {
      this.observers.splice(index, 1);
    }
  }

    /**
   * funcion para notificar de un cambio de tiempo a el observador
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
}
