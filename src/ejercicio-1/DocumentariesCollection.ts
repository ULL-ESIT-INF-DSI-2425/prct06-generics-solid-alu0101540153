
import {  SearchCriteria  } from "./streameable";
import {  BasicStreamableCollection  } from "./BasicStreamableCollection";

// Clase para gestionar colecciones de documentales
interface Documentary {
    title: string;
    year: number;
    topic: string;
  }
  
  export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    search(criteria: SearchCriteria): Documentary[] {
      return this.items.filter(item =>
        (criteria.name ? item.title.includes(criteria.name) : true) &&
        (criteria.year ? item.year === criteria.year : true)
      );
    }
  }