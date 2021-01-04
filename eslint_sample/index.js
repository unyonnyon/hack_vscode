/**
 * @prettier
 */
console.log("Hello");

// const error_variable = 0;
const element = document.createElement("div");

element.innerHTML = "Hello eslint";

for (let index = 0; index < 10; index++) {
    console.log(index);
}

// 無限ループに陥るようなコードをeslintがエラーとして指摘する
for (let index = 100; index > 10; index++) {
    console.log(index);
}

document.body.appendChild(element);
