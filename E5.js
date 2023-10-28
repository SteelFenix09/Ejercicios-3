function edad(familia){
    let familiaord = familia.sort((a,b)=> a.edad - b.edad)

    let menor = familiaord[0]

    let mayor = familiaord[familiaord.length - 1]

    return {menor, mayor}
}

let familia =[
    {nombre: `Juan`, edad: 34},
    {nombre: `Marina`, edad: 28},
    {nombre: `Itzel`, edad: 42},
    {nombre: `MArio`, edad: 38},
]

let {menor, mayor}= edad(familia)
console.log(`El mas joven es ${menor.nombre} con ${menor.edad} años`);
console.log(`El mas mañor es ${mayor.nombre} con ${mayor.edad}`);