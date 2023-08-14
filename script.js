//Guess the output of the given code.
//1
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);

// 2
// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

//3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

//4
// let z = [1, 2, 3, 4];
// let a = { name: "ravish" };
// console.log(...z);

//5
// console.log(typeof NaN);

//6
// let data = 10 - -10;
// console.log(data);

//7
// const set = new Set([1, 2, 1, 2, 3, 4]);
// console.log(set);

//8
// let data = { name: "Ravish" };
// console.log(delete data.name);
// console.log(data);

//9
// const data = { name: "Ravish" };
// console.log(delete data);
// console.log(data);

//10
// const data = ["peter", "anil", "sam"];
// const [x, y, z] = data;
// console.log(x);
// console.log(y);
// console.log(z);

//11
// const data = ["peter", "anil", "sam"];
// const [, y] = data; //how to get second element
// console.log(y);

//12
// const data = { name: "anil", age: 29, skill: "js" };
// const { age, name } = data;
// console.log(age);
// console.log(name);

//13
// how to get first property name
// const data = { name: "anil", age: 29, skill: "js" };
// console.log(Object.keys(data)[0]);

// 14
// let data = { name: "cyko", age: 12, skill: "engineer" };
// let data2 = { city: "Dehradun", place: "badowala" };
// let c = { ...data, ...data2 };
// console.log(c);

//15
// let data = { name: "ravish", age: 25, skill: "js" };
// let info = { city: "Noida" };
// data = { data, ...info };
// console.log(data);

//16
// let data = { name: "ravish", age: 25, skill: "js" };
// let info = { city: "Noida", skill: "node" };
// data = { ...data, ...info };
// console.log(data);

//17
// const name = "Anil";
// console.log(name());

//18
// const result = false || {} || null;
// console.log(result);

//19
// const result = null || false || "";
// console.log(result);

//20
// const result = [] || 0 || true;
// console.log(result);

//21
// console.log(Promise.resolve(5));

//22
// console.log("❤️" === "❤️");

//23
// JSON.parse();
// //what this method will do
// // a: parses json to javascript value
// // b: parse a javascript object to json
// // c: parses any javascript value to json
// // d: parses json to javascript object only

//24
// let name = "cyko";
// function getName() {
//   console.log(name);
//   let name = "ravish";
// }
// getName();

//25
// let name = "anil";
// function getName() {
//   console.log(name);
// }
// getName();

//26
// console.log(`${((x) => x)("i love")} to program`);

//27
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// // A: sumValues([...1, 2, 3]);
// // B: sumValues([...[1, 2, 3]]);
// // C: sumValues(...[1, 2, 3]);
// // D: sumValues([1, 2, 3]);

// console.log(sumValues(...[1, 2, 3]));

//28
// const name = "code step by step";
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// console.log(!typeof name === false);

//29
// const name = "subscribe";
// const age = 21;
// console.log(isNaN(name));
// console.log(isNaN(age));

//30
// let data = [2, 4, 6, 8];
// data.shift(); //remove first element
// console.log(data);

//31
// let data = [2, 9, 0, 10];
// data.pop(); // remove last element
// data.push(100); //add last element
// console.log(data);

//32
// let data = {
//   name: "cyko",
// };
// delete data.name;
// console.log(data.name);

//33
// let data = "true";
// console.log(!data); //convert data to boolean false value

// console.log(!!data); //convert data to boolean true

//34
//difference between map and for each
//map returns something and for each do not return anything

//35
// let data = ["anil", "peter", "bruice"];
// delete data[1];
// console.log(data);

//36
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [...a, ...b]; //merge two arrays
// console.log(c);

//36
// let a = [1, 2, 3, 4];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.log(c);

//37
// let c = 9 ** 2;
// console.log(c);

//38
// let a = 2;
// setTimeout(() => {
//   console.log(a);
// }, 0);
// a = 100;

//39
// let a = 2;
// let A = 30;
// console.log(A);

//40
// let A10 = "like";
// let 10A = "okay"
// console.log(A10);

//41
// let a = "like";
// let b = `like`;
// console.log(a === b);

//42
// let a = 1;
// let c = 2;
// // console.log(--c === a);
// console.log(c-- === a);

//43
// let a = 1;
// let b = 1;
// let c = 2;
// console.log();
// console.log((a === b) === --c);

//44
// console.log(3 * 3);
// console.log(3 ** 3);
// console.log(3***3);

//45
// console.log(a);
// var a;

//46
// console.log(b);

///47
// console.log([[[[]]]]);

//48
// let for = 100;
// // console.log(for)

//49
// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruit();
