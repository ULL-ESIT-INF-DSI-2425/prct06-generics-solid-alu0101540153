import { describe, expect, test } from "vitest";
import { GenericList } from "../src/modi/modi";



describe("prueba del gets", () => {
    const lista = new GenericList<number>();
    lista.set([1,2,3,4,5,6,7,8,9]);

    const lista1 = new GenericList<number>();
    lista1.set([8,8,8,7,7,7]);

  test("prueba del get", () => {
    expect(lista.get(2)).toBe(3);
  });

  test("prueba del getAll", () => {
    expect(lista.getAll()).toStrictEqual([1,2,3,4,5,6,7,8,9]);
  });


  test("prueba del length", () => {
    expect(lista.length()).toBe(9);
  });

  test("prueba del append", () => {
    lista.append(lista1);
    expect(lista.length()).toBe(15);
    expect(lista.get(10)).toBe(8);
    expect(lista.get(14)).toBe(7);
  });

  test("prueba del concatenate", () => {
    const concatenada = GenericList.concatenate(lista, lista1);
    expect(concatenada.length()).toBe(21);
    expect(concatenada.get(0)).toBe(1);
    expect(concatenada.get(8)).toBe(9);
    expect(concatenada.get(9)).toBe(8);
    expect(concatenada.get(14)).toBe(7);
  });

  test("prueba del push, añade un element", () => {
    const listaVacia = new GenericList<number>();
    listaVacia.push(100);
    expect(listaVacia.get(0)).toBe(100); 
    expect(listaVacia.length()).toBe(1); 
  });

  test("prueba para el filter, con una funcion inline", () => {
    const result = lista.filter(item => item > 7);
    expect(result.getAll()).toStrictEqual([8,9,8,8,8]); 
  });

  test("test para el mapeo con una funcion inline de esas", () => {
    const result = lista1.map(item => item * 2); 
    expect(result.length()).toBe(6); 
    expect(result.getAll()).toStrictEqual([16,16,16,14,14,14]); 

  });


});