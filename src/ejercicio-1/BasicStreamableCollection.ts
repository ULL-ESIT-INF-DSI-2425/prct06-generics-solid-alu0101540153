

import { Streamable, SearchCriteria  } from "./streameable";


// Clase abstracta que implementa la interfaz genérica Streamable
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }

  abstract search(criteria: SearchCriteria): T[];
}
