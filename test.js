// const Sokoban = () => {
//   const playerPosition = { x: 0, y: 0 }; // {x:3, y:1} -> {x:3, y:0}
//   const map = [["###p#"], ["#Oo0#"], ["#####"]]; // []
//
//   const parseInput = () => {};
//
//   const renderMap = () => {};
//
//   const findPlayer = () => {};
//
//   const move = (arrow) => {
//     if (arrow === "up") {
//       playerPosition.y -= 1;
//     } else if (arrow === "down") {
//       playerPosition.y += 1;
//     } else if (arrow === "left") {
//       playerPosition.x -= 1;
//     } else if (arrow === "right") {
//       playerPosition.x += 1;
//     }
//
//     const currentPos = map[playerPosition.y][playerPosition.x];
//
//     if (currentPos === "O") {
//       //초기화
//       // 못간다.
//     } else {
//       map[playerPosition.y][playerPosition.x] = "P";
//       renderMap();
//     }
//   };
//
//   const setKeyEvents = () => {
//     document.addEventListener("keydown", (event) => {
//       switch (event.key) {
//         case "ArrowUp":
//           move("up");
//           break;
//         case "ArrowDown":
//           move("down");
//           break;
//         case "ArrowLeft":
//           move("left");
//           break;
//         case "ArrowRight":
//           move("right");
//           break;
//       }
//     });
//   };
// };
//
// const main = () => {
//   const sokoban = new Sokoban();
//   sokoban.setKeyEvents();
//   sokoban.renderMap();
// };
//
// main();
//
// const arr = [11, , 2, 3, 4, 5];
// const unique = [...new Set(arr)];
//
// if (arr.length > unique.length) {
//   console.log("중복 있음");
// }
//
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// } // O(n)

// const 승현 = {
//   name: "승현",
//   age: 26,
//   address: "오산",
//   gender: "male",
//   sayHello: () => {
//     console.log("안녕하세요");
//   },
// };

const 태현 = {
  name: "태현",
  age: 30,
  address: "오산",
  gender: "male",
  sayHello: () => {
    console.log("안녕하세요");
  },
};

class Person {
  constructor(gender) {
    this.gender = gender;
  }

  sayHello() {
    console.log("안녕하세요");
  }
}

class 승현 extends Person {
  constructor(gender, name, age, address) {
    super(gender);
    this.name = name;
    this.age = age;
    this.address = address;
  }

  sing() {
    console.log("노래합니다.");
  }
}

const person1 = new Person("male");
const person2 = new Person("female");
const 승현1 = new 승현("male", "승현", 26, "오산");
console.log(person1);
console.log(person2);
console.log(승현1);

function PersonTest(gender) {
  this.gender = gender;
}

PersonTest.prototype.sayHello = function () {
  console.log("안녕하세요");
};

const personTest = new PersonTest("male");
const personTest2 = new PersonTest("male");
console.log(personTest);
console.log(personTest2);
personTest.sayHello();

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }
}
