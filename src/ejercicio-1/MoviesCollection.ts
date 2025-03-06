import {  SearchCriteria  } from "./streameable";
import {  BasicStreamableCollection  } from "./BasicStreamableCollection";


// Clase para gestionar colecciones de películas
interface Movie {
    title: string;
    year: number;
    duration: number; // Duración en minutos
  }
  
  export class MoviesCollection extends BasicStreamableCollection<Movie> {
    search(criteria: SearchCriteria): Movie[] {
      return this.items.filter(item =>
        (criteria.name ? item.title.includes(criteria.name) : true) &&
        (criteria.year ? item.year === criteria.year : true)
      );
    }
  }