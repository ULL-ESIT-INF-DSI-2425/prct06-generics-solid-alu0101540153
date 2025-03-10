/**
 * Adds two __numbers__
 * @param firstNumber - Consists of the first operand of the addition
 * @param secondNumber - Consists of the second operand of the addition
 * @returns The addition of the two numbers `firstNumber` and `secondNumber`
 * ```typescript
 * add(1, 7) = 8
 * ```
 */
export function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

/**
 * Substracts two __numbers__
 * @param firstNumber - Consists of the first operand of the substraction
 * @param secondNumber - Consists of the second operand of the substraction
 * @returns The substraction of the two numbers `firstNumber` and `secondNumber`
 * ```typescript
 * sub(1, 7) = -6
 * ```
 *
 */
export function sub(firstNumber: number, secondNumber: number): number {
  return firstNumber - secondNumber;
}

/**
 *
 * @param firstNumber - Consists of the first operand of the division
 * @param secondNumber - Consists of the second operand of the division
 * @returns The division of the two numbers `firstNumber` and `secondNumber`
 * ```typescript
 * div(4, 8) = 0.5
 * ```
 */
export function div(firstNumber: number, secondNumber: number): number {
  if (secondNumber === 0) {
    throw new Error("Zero division");
  }
  return firstNumber / secondNumber;
}



//=======================================


/**
 * Clase genérica para modelar una lista de elementos sin usar métodos de Array.prototype.
 */
class GenericList<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /** Agrega elementos de otra lista al final de la actual. */
  append(otherList: GenericList<T>): void {
    for (let i = 0; i < otherList.length(); i++) {
      this.items[this.items.length] = otherList.get(i);
    }
  }

  /** Concatena múltiples listas en una nueva. */
  static concatenate<T>(...lists: GenericList<T>[]): GenericList<T> {
    const newList = new GenericList<T>();
    for (const list of lists) {
      newList.append(list);
    }
    return newList;
  }

  /** Filtra los elementos según un predicado lógico. */
  filter(predicate: (item: T) => boolean): GenericList<T> {
    const filteredList = new GenericList<T>();
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.items[i])) {
        filteredList.push(this.items[i]);
      }
    }
    return filteredList;
  }

  /** Retorna el número de elementos en la lista. */
  length(): number {
    let count = 0;
    while (this.items[count] !== undefined) {
      count++;
    }
    return count;
  }

  /** Aplica una función a cada elemento y retorna una nueva lista con los resultados. */
  map<U>(fn: (item: T) => U): GenericList<U> {
    const mappedList = new GenericList<U>();
    for (let i = 0; i < this.length(); i++) {
      mappedList.push(fn(this.items[i]));
    }
    return mappedList;
  }

  /** Reduce los elementos al acumulador usando una función. */
  reduce<U>(fn: (acc: U, item: T) => U, initialValue: U): U {
    let accumulator = initialValue;
    for (let i = 0; i < this.length(); i++) {
      accumulator = fn(accumulator, this.items[i]);
    }
    return accumulator;
  }

  /** Retorna una nueva lista con los elementos en orden inverso. */
  reverse(): GenericList<T> {
    const reversedList = new GenericList<T>();
    for (let i = this.length() - 1; i >= 0; i--) {
      reversedList.push(this.items[i]);
    }
    return reversedList;
  }

  /** Itera sobre cada elemento de la lista y ejecuta una función. */
  forEach(fn: (item: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      fn(this.items[i]);
    }
  }

  /** Agrega un elemento al final de la lista. */
  push(item: T): void {
    this.items[this.items.length] = item;
  }

  /** Obtiene un elemento en una posición específica. */
  get(index: number): T {
    return this.items[index];
  }
}
