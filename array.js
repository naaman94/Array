console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7 , 9 , 45, ]

 ["Str","alex","moh",

 'the','fox' ,'over', 'lazy', 'dog'  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
// banana = 1 and tomato =0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var arrFood = ["mansaf", "mlu5ia", "ma8loba", "dawali", "dolma"]
var arrSport = ["football", "running", "hiking"]
var arrMovie = ["dontBreath", "wonder", "IT", "gone girls"]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr) {
    return arr[0]
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr) {
    return arr[arr.length - 1]
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var arr = [0, 5, 7, 9]
console.log(arr)
arr.shift()
arr.shift()
arr.shift()
arr.unshift(8)
arr.unshift(6)
arr.unshift(4)
arr.unshift(3)
arr.unshift(1)
arr.push(10)
console.log(arr)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]

done
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    var t
    if (arr.length % 2 === 0) {

        t = arr[((arr.length / 2) - 1)] + " and " + arr[(arr.length / 2)]
        return t
    }
    else {

        t = arr[(((arr.length - 1) / 2))]
        return t
    }
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
console.log(animals)
animals[0] = 'zebra'
animals[1] = 'elephant'
animals.length = 2
console.log(animals)

var nums = [1, 2, 3, 8, 9]
console.log(nums)

nums[0] = 5
nums[1] = +22
nums[2] = 3.5
nums[3] = 44
nums[4] = 98
nums[5] = 44
console.log(nums)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, n) {

    return arr[n]
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    arr.length = arr.length - 1
    return arr

}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, val) {

    arr[arr.length - 1] = val

    return arr
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArrayw(arr) {
    var sum = 0;

    while (arr.length !== 0) {
        sum += arr[(arr.length - 1)]

        arr.length--
    }
    return sum
}




function sumArrayf(arr) {
    var sum = 0;



    for (let i = 0; i !== arr.length; i++) {
        sum += arr[i]

    }

    return sum
}



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function minInArrayW(arr) {
//     var min = arr[arr.length - 1]
//     while (arr.length !== 0) {
//         if (arr[arr.length - 1] <= min) {
//             min = arr[arr.length - 1]
//         }
//         arr.length--
//     }
//     return min
// }


function minInArrayW(arr) {
    while (arr.length !== 1) {
        if (arr[arr.length - 1] <= arr[arr.length - 2]) {
            arr[arr.length - 2] = arr[arr.length - 1]
        }
        arr.length--
    }
    return arr
}

function minInArrayF(arr) {
    for (let i = 0; i !== arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            arr[i + 1] = arr[i]
        }
    }
    return arr[arr.length - 1]
}




/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, n) {
    var i = 0
    while (i <= (arr.length - 1)) {

        if (n === arr[i]) {

            arr.splice(i, 1);
            i--
        }
        i++
    }

    return arr
}


function removeFromArrayF(arr, n) {
    for (let i = 0; i < arr.length; i++) {

        if (n === arr[i]) {

            arr.splice(i, 1);
            i--
        }
    }

    return arr
}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    var i = 0
    while (i <= (arr.length - 1)) {

        if (arr[i] % 2 === 0) {

            arr.splice(i, 1);
            i--
        }
        i++
    }

    return arr
}


function oddArrayf(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
            i--
        }
    }

    return arr
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function aveArray(arr) {
    var i = 0
    while (i <= (arr.length - 1)) {

        if (arr[i] % 2 === 1) {

            arr.splice(i, 1);
            i--
        }
        i++
    }

    return arr
}


function aveArrayf(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 1) {
            arr.splice(i, 1);
            i--
        }
    }

    return arr
}


/*
18
Create a function called shorterInArray
that accept an array of strings
and  returnthe shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr) {
    var min = arr[0]
    var i = 0
    while (arr.length !== i) {
        if (arr[i].length <= min.length) {
            min = arr[i]
        }
        i++
    }
    return min
}



function shorterInArrayf(arr) {
    var min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= min.length) {
            min = arr[i]
        }
    }
    return min
}
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
