class Spacecraft {
    constructor (public propulsor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

//interfaces nao transpilam pro javascript
interface ContainerShip {
    cargoContainers: number
}

export {Spacecraft, ContainerShip}