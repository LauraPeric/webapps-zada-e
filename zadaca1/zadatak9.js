<<<<<<< HEAD
var obj = { a: 1, b: 2, c: 3 };
var obj2 = { a: 321, b: 3, c: 1 };

var istikljuc = function (obj, obj2) {
    let objkeys = Object.keys(obj);
    if (objkeys.length === Object.keys(obj2).lenght) {
        return objkeys.every(key => obj2.hasOwnProperty(key) && obj2[key] === obj[key]);
    }
    return false;
};

=======
var obj = { a: 1, b: 2, c: 3 };
var obj2 = { a: 321, b: 3, c: 1 };

var istikljuc = function (obj, obj2) {
    let objkeys = Object.keys(obj);
    if (objkeys.length === Object.keys(obj2).lenght) {
        return objkeys.every(key => obj2.hasOwnProperty(key) && obj2[key] === obj[key]);
    }
    return false;
};

>>>>>>> 5c5bdf64b9885cd0517eca0a4d83c4f5acf257fe
console.log(istikljuc(obj, obj2));