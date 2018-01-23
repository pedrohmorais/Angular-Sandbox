class Spacecraft {
    constructor (public propulsor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number

    constructor(){
        //super é usado para chamar o this da funcao pai
        super('hyperdrive')
        this.cargoContainers = 2
    }

    //na heranca eu posso subrescrever uma classe this e chamar a pai usando super
    jumpIntoHyperSpace() {
        if(Math.random() >= 0.5) {
            super.jumpIntoHyperSpace()
        }else {
            console.log("Failed to jump into hyperspace")
        }
    }
}

//chama a funcao
let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

//interfaces nao transpilam pro javascript
interface ContainerShip {
    cargoContainers: number
}

//para uma containership ela é boa ?
let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job ? ${goodForTheJob(falcon)}`)
