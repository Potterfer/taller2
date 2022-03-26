/*1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10
segundos) y una vez este objeto sea creado se debe llamar a una función
secundaria que clasifique y muestre en consola la actividad asignada al
Padawan*/


//DECLARO LA FUNCION PRINCIPAL
function aprendices(nombre, planeta, edad, estatura, callback){

    setTimeout(function(){

        //PROCESO PRINCIPAL
        let aprendiz = {
            nombreAprendiz : nombre,
            planetaAprendiz : planeta,
            edadAprendiz : edad,
            estaturaAprendiz: estatura
        }

        //LLAMANDO AL CALLBACK
        callback(aprendiz)
    },10000)

}
//LLAMO LA FUNCION PRINCIPAL "declaro lo que hay en el callback"

aprendices("pepito", "tierra",14, 1.70, function(aprendiz){
    if (aprendiz.edadAprendiz<15){
        console.log("el aprendiz sera asignado a manejo de la fuerza")
    }
    else{
        console.log("el aprendiz sera asignado a Manejo del sable de luz")
    }
}
) 
