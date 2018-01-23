let message: string = "Help me"
console.log(message)
let episode: number = 4
console.log("this id episode" + 4)
episode = episode + 1
console.log("next is " + episode)

let favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)



let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parcecs enough to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name : string) => console.log(`Do you copy, ${name}`)
call('R2')

function inc (speed: number , inc: number = 1) :number {
    return speed + inc
}

let inc2 = (speed: number , inc: number = 1) => speed + inc

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)

console.log(`inc (5,1) = ${inc2(5,1)}`)
console.log(`inc (5) = ${inc2(5)}`)