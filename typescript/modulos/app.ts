import {Spacecraft, ContainerShip} from './base-ships'
import {MilleniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples",40,"="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

//chama a funcao
let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

//para uma containership ela é boa ?
let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job ? ${goodForTheJob(falcon)}`)
