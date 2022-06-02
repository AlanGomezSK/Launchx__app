//prueba de unidad basica con jest
const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
const andres = new MissionCommander("andres")
const alan = new MissionCommander("alan")
console.log(carlo.name)
console.log(andres.name)
console.log(alan.name)