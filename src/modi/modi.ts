

/**
 * clase para la modificacion, p6, para una lista vector generica
 */
export class GenericList<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }

    /**
     * 
     * @param list - lista que se desea asignar a items
     */
    set(list: T[]): void{
        this.items = list;
    }

    /**
     * 
     * @returns retorna todo el vector items
     */
    getAll(): T[]{
        return this.items;
    }

    /**
     * 
     * @param element - elemento que se desea hacer push
     */
    push(element:T): void{
        this.items[this.length()] = element;
    }

    /**
     * funcion para coger un elemento
     * @param index - numero del indice que se desea
     * @returns -  el elemento
     */
    get(index: number): T {
        return this.items[index];
    }

    /**
     * 
     * @returns retorna el numero de elementos que componen la lista
     */
    length(): number {
        let count = 0;
        while (this.items[count] !== undefined) {
            count++;
        }
        return count;
    }


    /**
     * Fusiona dos listas , le aumenta lo q sea al tamaño tambien
     * @param otherList -  la añade al final de la lista que llama
     */
    append(otherList: GenericList<T>): void {
        for (let i = 0; i < otherList.length(); i++) {
            this.items[this.length()] = otherList.get(i);
        }
    }

    /**
     * dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
     * @param lists - listas de genericos que se desean concatenar
     */
    static concatenate<T>(...lists: GenericList<T>[]): GenericList<T> {
        const newList = new GenericList<T>();
        for (const list of lists) {
            newList.append(list);
        }
        return newList;
    }

    /**
     * dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
     * @param predicate - predicado lógico que quierse que cumpla
     * @returns  lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
     */
    filter(predicate: (item: T) => boolean): GenericList<T> {
        const filteredLista = new GenericList<T>();
        for (let i = 0; i < this.length(); i++) {
            if (predicate(this.items[i])) {
                filteredLista.push(this.items[i]);
            }
        }
        return filteredLista;
    }

    /**
     * dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
     * @param funcion - funcion para aplicar a la lista
     * @returns  la lista resultante de aplicar a cada elemento de la lista inicial la función.
     */
    map<V>(funcion: (item: T) => V): GenericList<V> {
        const listamapeada = new GenericList<V>();
        for (let i = 0; i < this.length(); i++) {
            listamapeada.push(funcion(this.items[i]));
        }
        return listamapeada;
    }


}