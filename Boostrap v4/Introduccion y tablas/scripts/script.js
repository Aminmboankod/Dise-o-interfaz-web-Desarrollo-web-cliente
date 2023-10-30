function sumavariables (a, b) {
    return a + b;
}

function rellenarObjeto(color, owner, id_elemento) {
    const Car = {type: "Ford", model: "Fiesta", color:"white"};
    Car.color = color;
    Car.owner = owner;

    document.getElementById(id_elemento).innerHTML = Car.type + Car.model + Car.color + Car.owner;
}