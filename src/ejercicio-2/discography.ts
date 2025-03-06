
export class Discography<T> {
    private collection: T[] = [];
  
    public add(item: T): void {
      this.collection.push(item);
    }
  
    public getAll(): T[] {
      return this.collection;
    }
  }
  