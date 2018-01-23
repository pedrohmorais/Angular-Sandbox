var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = 
        //super é usado para chamar o this da funcao pai
        _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    //na heranca eu posso subrescrever uma classe this e chamar a pai usando super
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
//chama a funcao
var falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();
//para uma containership ela é boa ?
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job ? " + goodForTheJob(falcon));
