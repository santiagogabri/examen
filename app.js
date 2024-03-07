const lista = []

const enviarRegistro = (event)=>{
    event.preventDefault()
    let titulo = document.getElementById("titulo")
    let nombre = document.getElementById("nombre")
    let dni = document.getElementById("dni")

    let alumno ={
        nombre: nombre.value,
        titulo: titulo.value,
        dni: dni.value,
        id: lista.length
    }

    lista.push(alumno)

    titulo.value=""
    nombre.value=""
    dni.value=""

    mostrarLista()
}

const mostrarLista = ()=>{
    let salida = document.getElementById("salida")
    salida.innerHTML=""
    lista.map((elemento)=>{
        salida.innerHTML+=`
        <tr>
            <td>${elemento.id} </td>
            <td>${elemento.nombre}</td>
            <td>${elemento.dni}</td>
            <td>${elemento.titulo}</td>
        </tr>
        `
    })
}