function mayor() {
    const A = [12, 15, 4, 68, 20, 10]
    const buscar = 11
    const encontrar = A.filter(function (numero) {
        return numero === buscar
    })
    if (encontrar.length > 0) {
        console.log(`El número ${buscar} se encuentra en el array.`);
    } else {
        console.log(`El número ${buscar} no se encuentra en el array.`);
    }
}
console.log(mayor());


