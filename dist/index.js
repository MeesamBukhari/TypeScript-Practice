"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Basic Types */
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
/* Arrays */
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
/* Tuples */
let person = [1, 'Brad', true];
/* Tuple Array */
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
/* Union */
let userId;
userId = '22';
/* Enum */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const User = {
    id: 1,
    name: 'John'
};
/* Type Assertion */
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
/* Above two lines are different ways to do type assertion */
/* Functions */
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5, 4));
function log(message) {
    console.log(message);
}
const User1 = {
    id: 1,
    name: 'John'
};
