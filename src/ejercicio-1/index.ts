
// Archivo de prueba
import { SeriesCollection } from "./SeriesCollection";
import { MoviesCollection } from "./MoviesCollection";
import { DocumentariesCollection } from "./DocumentariesCollection";

const seriesCollection = new SeriesCollection([
  { title: "Breaking Bad", year: 2008, seasons: 5 },
  { title: "Stranger Things", year: 2016, seasons: 4 }
]);

const moviesCollection = new MoviesCollection([
  { title: "Inception", year: 2010, duration: 148 },
  { title: "Interstellar", year: 2014, duration: 169 }
]);

const documentariesCollection = new DocumentariesCollection([
  { title: "Planet Earth", year: 2006, topic: "Nature" },
  { title: "The Social Dilemma", year: 2020, topic: "Technology" }
]);

console.log("Búsqueda de series por año 2008:", seriesCollection.search({ year: 2008 }));
console.log("Búsqueda de películas con 'Inter' en el título:", moviesCollection.search({ name: "Inter" }));
console.log("Búsqueda de documentales por año 2020:", documentariesCollection.search({ year: 2020 }));
