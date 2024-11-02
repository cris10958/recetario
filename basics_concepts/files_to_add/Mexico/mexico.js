let entradas = 0
let salidas = 0
let disponibilidad ={
    entradas:10,
    salidas: 21
}
function estado(tipo){
    if(!validar_disponibilidad(tipo)){
        console.log('Sin productos disponibles')
        return
    } 
    if(tipo == 'Entrada') entradas += 1
    if(tipo == 'Salidas') salidas += 1

}
function validar_disponibilidad(tipo){
    if(tipo == 'Entrada' && disponibilidad?.entradas > entradas + 1 )
        return false
    if(tipo == 'Salidas' && disponibilidad?.salidas > salidas + 1 ){
        return false
    }
    return true
}

function estado_duplicado(tipo){
    if(!validar_disponibilidad(tipo)){
        console.log('Sin productos disponibles')
        return
    } 
    if(tipo == 'Entrada') entradas += 1
    if(tipo == 'Salidas') salidas += 1

}
function validar_disponibilidad_duplicada(tipo){
    if(tipo == 'Entrada' && disponibilidad?.entradas > entradas + 1 )
        return false
    if(tipo == 'Salidas' && disponibilidad?.salidas > salidas + 1 ){
        return false
    }
    return true
}