function calcular_area_circ(r){
 
    const respuesta = Math.PI* Math.pow(r,2)
    return respuesta

}


function mostrar_area(){
    const num = document.getElementById("inp_num").value

    const resultado = calcular_area_circ(num)

    alert (resultado)

}