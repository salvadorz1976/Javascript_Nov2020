function Car(marcaa,modelo,anio){
    this.mara = marca;
    this.modelo = modelo;
    this.anio = anio;
}

console.log(Car)

var micoche = new Car('Seat', 'Leon', 2020)
var otrocoche = new Car('Nissan', 'Platina', 1980)
var elotrocoche = new Car('Nissan', 'Platina', 1976)


console.log(micoche)
console.log(otrocoche)
console.log(elotrocoche)

function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

var maria = new Persona('Maria', 20, 'Mujer')
function auto(marca,modelo,anio,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var car54 = new auto('Seat','Cupra',2019,maria)
var car52 = new auto('VW','Bocho',2020,marifer)

car54.color = 'Azul marino'

console.log(car54)
console.log(car52)

//Tarea creacion de Casa y Persona en objetso

function casa = {
    sala : "";
    comedor: "";
    cuartos: "";
    get 
}

function Casa(cocina,comedor,banio){
    this.cocina = cocina;
    this.comedor= comedor;
    this.banio = banio;
}

console.log(Casa)

var micoche = new Casa('Palladium', 'Plascencia', 2020)
var otrocoche = new Casa('Ciguena', 'Ciguena', 1980)
var elotrocoche = new Casa('HomeDepot', 'SanPedrito', 1976)