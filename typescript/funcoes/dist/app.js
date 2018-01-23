var message = "Help me";
console.log(message);
var episode = 4;
console.log("this id episode" + 4);
episode = episode + 1;
console.log("next is " + episode);
var favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parcecs enough to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
var inc2 = function (speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
};
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
console.log("inc (5,1) = " + inc2(5, 1));
console.log("inc (5) = " + inc2(5));
