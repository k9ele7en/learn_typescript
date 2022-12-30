const anExampleVariable = "Hello World"
// console.log(anExampleVariable)

let arr: string[] = ["1", "2", "abc"]
// console.log(arr[2])

let tuple: [string, number]=["1", 2]
tuple.push(1)
// console.log(tuple)

let tuple1: [string, number]
tuple1= ["1", 2]
tuple.push(1)
// console.log(tuple1)

const car: { type: string, mileage?: any } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
//   mileage: 3
};
car.mileage = true;
// console.log(car)

const nameAgeMap: { [i: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 24; 
// console.log(nameAgeMap)

//////////
type CarYear = number
type CarType = string
type CarModel = string
type CarBrand = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel,
  brand: CarBrand
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const carBrand: CarBrand = "Lexux"
const car1: Car = {
  year: carYear,
  type: carType,
  model: carModel,
  brand: carBrand
};
car1.year=2022
// console.log(car1)

////////
// interface Rectangle {
//   height: number,
//   width: number,
//   brand: CarBrand
// }

// const rectangle: Rectangle = {
//   height: 20,
//   width: 10,
//   brand: "yoto"
// };
// console.log(rectangle)


///////
function printStatusCode(code: string | number | boolean) {
  console.log(`My status code is ${code}.`)
}
// printStatusCode(true);
// printStatusCode('404');

////
function getTime(): string {
  return new Date().getTime().toString();
}
// console.log(getTime())


/////
function multiply(a: number, b: number, c?: number): string {
  return (a * b + (c || 0)).toString();
}
// console.log(multiply(2,6,3))

///
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c);
}
// console.log(add(1,2,3,4,5))

///
type Negate = (value: number) => string;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value + "abc";
// const negateFunction: Negate = (value) => value * -1;

// console.log(negateFunction(1))


///
let x: unknown = "1";
// console.log(((x as unknown) as number));

////
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
const person2 = new Person("BACK");
// console.log(person2.getName());

///
interface Shape {
  getArea: () => number;
}


/////
abstract class Polygon {
  public abstract getSum1(): number;
//   public abstract getArea(): number;
//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
}

class rRectangle11 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }
//   public getArea(): number {
//     return this.width * this.height;
//   }
  public getSum1(): number {
    return this.width + this.height;
  }
}
const rect1 = new rRectangle11(3,4)
// console.log(rec1.getArea())
// console.log(rec1.toString())
// console.log(rect1.getSum1())

///
function createPair<S, I>(v1: S, v2: I): [S, I] {
  return [v1, v2];
}
// console.log(createPair<string, number>('hello', 42));

///
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
// console.log(point)

//
type PointPrinter = (p: { x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
// console.log(point2)

//
interface Person {
  name2: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person, property2: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}", ${person[property2]}`);
}
let person3 = {
  name: "Max",
  age: 27
};
// printPersonProperty(person3, "age", "name");

//
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
const exMap = { "provinceNo": 21}
// console.log(createStringPair("provinceNo", "22"))

///
function getValue(): string | undefined {
  return 'hello';
}
let value = getValue();
// console.log('value length: ' + value!.length);