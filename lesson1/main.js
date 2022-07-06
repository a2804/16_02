const a = "a"; //string

// console.log(a);

let b = 45; //number

// b = "change"
//
// console.log(b)

const bool = true; //boolean
const bool2 = false;

const obj = {
    key: `value`,
    username: `Sara`,
    data: {
        first_name: "jack",
        last_name: "Barbaro"
    }
}

// console.log(obj.data.last_name)

const arr = ["Aydin", true, fALSE, 35]  //array
//console. log(arr[1])

const arr2 = [
    {
        key: `value`
    },
    {
        key: `value2`
    }
    {
        key: `value3`
    }
]
console.log(arr2[2].key)


const name = prompt("Как вас зовут?)
    console.log(name)
const age = prompt("вам еще нет 18?")

const first_number = prompt("первое число")
const last_number = prompt("второе число")

if (first_number > last_number){
    console.log(first_number + ">" + last_number)

}else if (first_number > last_number) {
    console.log(first_number + "<" + last_number)
}else if (first_number > last_number){
    console.log(first_number + "=" + last_number)
}

const age = prompt("Сколько вам лет?")
if (age < 18){
    console.log("вам нельзя входить")
} else if (age > 18){
    console.log("вам можно")
} else (age = 18){
    console.log("поживи еще годик")
}





