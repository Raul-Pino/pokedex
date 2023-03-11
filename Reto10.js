/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 * 
 * official-artwork
    front_default
    other.official-artwork.front_default
 */

//mensaje

const body = document.getElementById('clase')
const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')

//const find = prompt('¿Que pokemon buscas?').toLocaleLowerCase()

async function callAPI(value){
    const variable=`https://pokeapi.co/api/v2/pokemon/${value}`
    try {
        const data = await fetch(variable)
        const result = await data.json()
        html(result)
        //console.log(result)
    } catch (error) {
        console.log(error)
        body.innerHTML = `
        <p>Ha ocurrido un problema con la busqueda</p>
        `
    }
}
function limpiarHTML(){
body.innerHTML= ''
anterior.innerHTML= ''
siguiente.innerHTML= ''
document.getElementById('nombre').value = ''
}

function html(result){
    limpiarHTML()
    const sprite = result.sprites.other['official-artwork'].front_default
    const nombre = result.name
    const id = result.id
    body.innerHTML = `
        <p>${nombre} ${id}</p>
        <img src="${sprite}" alt="imagen">`
    if (id !== 1){
    anterior.innerHTML =`<button onclick="callAPI(${id - 1})">Anterior</button>`}
    siguiente.innerHTML = `<button onclick="callAPI(${id + 1})">Siguiente</button>`
}

