function buscar() {
    const numero = [2, 4, 6, 8, 10, 54, 12, 24]
    let queen = 0
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] > queen) {
            queen = numero[i];
        }
    }
    return queen
}
const mayor=buscar()
console.log(buscar());