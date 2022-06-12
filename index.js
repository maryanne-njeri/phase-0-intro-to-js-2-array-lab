// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
console.log(cats)


function destructivelyAppendCat(..._cats) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(..._cats) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(..._cats) {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(..._cats) {
    return [...cats, "Broom"];
}

function prependCat(..._cats) {
    return ["Arnold", ...cats];
}

function removeLastCat(..._cats) {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(..._cats) {
    return cats.slice(1);
}

console.log(appendCat())
console.log(prependCat())
console.log(removeLastCat())
console.log(removeFirstCat())
