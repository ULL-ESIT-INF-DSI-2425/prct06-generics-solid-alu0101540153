
/**
 * Interfaz para las clases observables.
 * Define los métodos necesarios para que un objeto sea observable.
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }
  
  /**
   * Interfaz para las clases observadoras.
   * Define el método update que los observadores implementarán.
   */
export interface Observer {
    update(observable: Observable): void;
}