import {Spacecraft, ContainerShip} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements ContainerShip {

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