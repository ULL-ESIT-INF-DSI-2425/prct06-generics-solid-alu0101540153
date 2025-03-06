
// Pruebas con Vitest
import { describe, expect, test } from "vitest";
import { SeriesCollection } from "../src/ejercicio-1/SeriesCollection";
import { MoviesCollection } from "../src/ejercicio-1/MoviesCollection";
import { DocumentariesCollection } from "../src/ejercicio-1/DocumentariesCollection";

describe("SeriesCollection tests", () => {
  const seriesCollection = new SeriesCollection([
    { title: "Breaking Bad", year: 2008, seasons: 5 },
    { title: "Stranger Things", year: 2016, seasons: 4 }
  ]);

  test("Buscar serie por año", () => {
    expect(seriesCollection.search({ year: 2008 })).toEqual([
      { title: "Breaking Bad", year: 2008, seasons: 5 }
    ]);
  });
});

describe("MoviesCollection tests", () => {
  const moviesCollection = new MoviesCollection([
    { title: "Inception", year: 2010, duration: 148 },
    { title: "Interstellar", year: 2014, duration: 169 }
  ]);

  test("Buscar película por nombre", () => {
    expect(moviesCollection.search({ name: "Inter" })).toEqual([
      { title: "Interstellar", year: 2014, duration: 169 }
    ]);
  });
});

describe("DocumentariesCollection tests", () => {
  const documentariesCollection = new DocumentariesCollection([
    { title: "Planet Earth", year: 2006, topic: "Nature" },
    { title: "The Social Dilemma", year: 2020, topic: "Technology" }
  ]);

  test("Buscar documental por año", () => {
    expect(documentariesCollection.search({ year: 2020 })).toEqual([
      { title: "The Social Dilemma", year: 2020, topic: "Technology" }
    ]);
  });
});
