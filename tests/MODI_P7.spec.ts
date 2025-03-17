// Importamos las clases necesarias
import { describe, expect, test } from "vitest";
import { WeatherStation } from "../src/MODI_P7/WeatherStation";
import { MobileDevice } from "../src/MODI_P7/Movil";
import { PanelDevice } from "../src/MODI_P7/Panel";
import { Coche } from "../src/MODI_P7/Coche";


describe("WeatherStation tests", () => {
    let station: WeatherStation;
    let mobileDevice: MobileDevice;
    let panelDevice: PanelDevice;
    let coche: Coche;
  
      station = new WeatherStation(1, 'Estación 1');
      mobileDevice = new MobileDevice(1, 'Móvil 1');
      panelDevice = new PanelDevice(1, 'Panel 1');
      coche = new Coche(1, "Coche 1");

  
    test(" obtener la temperatura inicial correctamente", () => {
      expect(station.getTemperature()).toBe(20); 
    });
  
    test(" cambiar la temperatura correctamente", () => {
      station.setTemperature(25);
      expect(station.getTemperature()).toBe(25);
  
      station.setTemperature(30);
      expect(station.getTemperature()).toBe(30);
    });
  
    test("suscribir dispositivos a la estación correctamente", () => {
      station.subscribe(mobileDevice);
      expect(station['observers'].length).toBe(1);
  
      station.subscribe(panelDevice);
      expect(station['observers'].length).toBe(2);
    });


    test("suscribir dispositivos a la estación correctamente", () => {
        station.subscribe(coche);
        expect(station['observers'].length).toBe(3);
      });
  
    test("desuscribir un dispositivo correctamente", () => {
      station.unsubscribe(mobileDevice);
      expect(station['observers'].length).toBe(2); 
    });

  });