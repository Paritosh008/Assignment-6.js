//Write a javascript function find_largest to return the nth largest numberin an array-
//eg- given an array of integers- [3,45,6,7,23,5,7,8]

unction thirdLargest(arr){
let arr_size = arr.length

    if(arr_size < 3){
        return "Invalid Input"
    }

    var first = arr[0]
    var second = -1000000000
    var third = -1000000000

    for(let i = 1; i<arr.length; i++){

        if(arr[i]>first){
            third = second
            second = first
            first = arr[i]
        }

        else if(arr[i]>second){
            third = second
            second = arr[i]
        }

        else if(arr[i]>third){
            third = arr[i]
        }

    }
    return third  

}
var arr = [3,45,6,7,23,5,7,8]
console.log(thirdLargest(arr))
