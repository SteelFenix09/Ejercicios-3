function encontrarEdadesExtremas(familia) {
    // Ordenamos la lista de familiares por edad
    let familiaOrdenada = familia.sort((a, b) => a.edad - b.edad);

    // El familiar con menor edad será el primero
    let menor = familiaOrdenada[0];

    // El familiar con mayor edad será el último
    let mayor = familiaOrdenada[familiaOrdenada.length - 1];

    return {menor, mayor};
}

// Ejemplo de uso
let familia = [
    {nombre: 'Juan', edad: 34},
    {nombre: 'Ana', edad: 28},
    {nombre: 'Carlos', edad: 42},
    {nombre: 'María', edad: 36}
];

let {menor, mayor} = encontrarEdadesExtremas(familia);

console.log(`El miembro más joven de la familia es ${menor.nombre} con ${menor.edad} años.`);
console.log(`El miembro más viejo de la familia es ${mayor.nombre} con ${mayor.edad} años.`);
