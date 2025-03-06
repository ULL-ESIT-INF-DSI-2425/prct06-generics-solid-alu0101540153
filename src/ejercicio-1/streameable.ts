// Interfaz genérica para colecciones de contenido en streaming
export type SearchCriteria = { name?: string; year?: number };

export interface Streamable<T> {
  addItem(item: T): void;
  getItems(): T[];
  search(criteria: SearchCriteria): T[];
}

