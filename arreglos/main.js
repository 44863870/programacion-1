let facturas = [ 'cara sucia','media-luna dulce','cañoncitos de dulce de leche']

//como saber la longitud de un arreglo
//es la cantidad de elementos de un arreglo
const longitud = facturas.length
console.log ('longitud: '+longitud)

//como acceder a un elemento del array mediante su indice
const primero = facturas[0]
 console.log('el primer elemento es: '+primero)

 //como acceder al ultimo elemento de un arreglo
 const ultimo = facturas[longitud-1]
 console.log ('el ultimo elemento del arreglo es: '+ultimo)

 //como recorrer un array haciendo uso de un foreach
facturas.forEach( (element,index) => {
    console.log(index+ '-'+element) 
});

//como agregar un nuevo elemento al final de un arreglo
facturas.push('rosquitas')
console.log(facturas)

//como eliminamos el ultimo elemento de un arreglo (adios rosquitas)
facturas.pop()
console.log(facturas)

//como agregar un elemento al inicio de un arreglo
facturas.unshift('rosquitas')
console.log(facturas)

//como eliminar el primer elemento de un arreglo
facturas.shift()
console.log(facturas)

//como obtener el indice de un elemento
const indice = facturas. indexOf('cañoncitos de dulce de leche')
console.log('el indice del cañoncito es: '+indice)

//como eliminar un elemento del areglo haciendo su indice
facturas.splice(indice,1)
console.log(facturas)

//como eliminar mas de un elemento de un arreglo
const indice_ml =facturas.indexOf('media-luna dulce')


//no solo eliminamos sino que nos informa de los elementos eliminados
const eliminados = facturas.splice(indice_ml,2)
console.log('eliminados:'+eliminados)
console.log(facturas)



//como generar una copia de un arreglo
const copiafacturas = facturas.slice()
copiafacturas.push('rosquitas','cañoncitos de dulce de leche','churros')
console.log('copia:'+copiafacturas)
console.log('original:'+facturas)

//como agregar elementos en medio de un arreglo
copiafacturas.splice(2,0, "biscochitos")
console.log(copiafacturas)
