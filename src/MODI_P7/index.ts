// ESTO ES SOLO PA PROBAR Q FUNCIONA


import { WeatherStation } from './WeatherStation.js';
import { MobileDevice } from './Movil.js';
import { PanelDevice } from './Panel.js';

const station = new WeatherStation(1, 'Estación 1');

const mobileDevice = new MobileDevice(1, 'Móvil 1');
const panelDevice = new PanelDevice(1, 'Panel 1');

station.subscribe(mobileDevice);
station.subscribe(panelDevice);

console.log('Cambio de temperatura a 25°C');
station.setTemperature(25);

console.log('Cambio de temperatura a 30°C');
station.setTemperature(30);

console.log('Desuscribir el Móvil 1');
station.unsubscribe(mobileDevice);

console.log('Cambio de temperatura a 35°C');
station.setTemperature(35);
