
import {  SearchCriteria  } from "./streameable";
import {  BasicStreamableCollection  } from "./BasicStreamableCollection";

interface Series {
    title: string;
    year: number;
    seasons: number;
  }
  
  export class SeriesCollection extends BasicStreamableCollection<Series> {
    search(criteria: SearchCriteria): Series[] {
      return this.items.filter(item =>
        (criteria.name ? item.title.includes(criteria.name) : true) &&
        (criteria.year ? item.year === criteria.year : true)
      );
    }
  }