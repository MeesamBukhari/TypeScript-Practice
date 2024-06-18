/* Basic Types */
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

/* Arrays */
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

/* Tuples */
let person: [number, string, boolean] = [1, 'Brad', true];

/* Tuple Array */
let employee: [number, string][];
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
]

/* Union */
let userId: string | number;
userId = '22';

/* Enum */
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

/* Objects */
type User = {
    id: number,
    name: string
}

const User: User = {
    id: 1,
    name: 'John'
}

/* Type Assertion */
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
/* Above two lines are different ways to do type assertion */

/* Functions */
function addNum(x: number, y: number): number {
    return x + y;
}
// console.log(addNum(5, 4));

function log(message: string | number): void {
    console.log(message)
}
// log('Hello');

/* Interfaces */
interface UserInterface {
    id: number,
    name: string
}

const User1: UserInterface = {
    id: 1,
    name: 'John'
} 