"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
//chama a funcao
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperSpace();
//para uma containership ela é boa ?
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job ? " + goodForTheJob(falcon));
