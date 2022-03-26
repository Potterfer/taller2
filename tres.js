// . PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
// activar un software que permita clasificar su dieta:
// alimento = {
//  nombre,
//  tipo (Puede ser vegetal, animal, insecto),
//  nivel de energía (números entre 100-500)

// }
// Cree un programa que permita recibir 50 alimentos diferentes y
// mediante una función primaria después de 5 segundos se
// pueda obtener solo los alimentos de tipo vegetal que entreguen
// mas de 200 unidades de energía. Finalmente, una función
// callback debe permitir entregar la sumatoria de niveles de
// energía entregados por los alimentos vegetales consumidos en
// la dieta de Grogu

let nombres =['brocoli','piña', 'solomo', 'churrazco', "chapulin", "cucaracha", "pechuga"]
    let tipos =['animal', 'vegetal', "insecto"]

let alimentos=[]

for(let i=0;i<20; i++){
    let alimento={}
    alimento.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo=tipos[Math.floor(Math.random()*tipos.length)]

    alimento.energia=Math.floor(Math.random()*(0,1000))

    //agregado el objeto estudiate al arreglo estudiates
    alimentos.push(alimento)

}

//declarando la funcion pricipal

function filtrarVegetales(alimentos,callback){
    setTimeout(function(){
       let vegetales= alimentos.filter(function(alimento){
            return(alimento.tipo=="vegetal" && alimento.energia>250)
        })
        callback(vegetales)
    },10000)
}

//llamando a la funcion pincipal
filtrarVegetales(alimentos, function(vegetales){
    let sumaEnergia =0
    vegetales.forEach(function(vegetal){
       sumaEnergia = sumaEnergia + vegetal.energia

    })
    console.log(vegetales)
    console.log(`el total de la energia ingerida es: ${sumaEnergia}`)

})





