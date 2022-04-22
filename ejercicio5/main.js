
function mostrar(){
   const a = document.getElementById("var1").value
   const b = document.getElementById("var2").value
   const c = document.getElementById("var3").value

    const respuesta = calcular_raices(a,b,c)

    alert (respuesta)

}

function calcular_raices (a,b,c){

const parte1 = Math.pow (b,2)-(4*a*c)
const parte2 = Math.sqrt (parte1)
const resultado = (-b+parte2)/(2*a)
const resultado2 = (-b-parte2)/(2*a)

    return resultado +"     ° -°     "+ resultado2
}

