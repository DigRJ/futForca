

const resetTeclado = async (p) =>{

    var teclado = await document.querySelectorAll(".letra") 

    teclado.forEach(obj=>{
        obj.style.backgroundColor = "darkgrey"
        obj.style.color = "black"
        obj.onclick = ((e)=>{   verificar( p , e.target )  })
    })


}




const resetTracejado = async (p) =>{

    var boxTracos = await document.querySelector(".boxGameAjuste") 
    var tracos   = await document.querySelectorAll(".traco") 

    tracos.forEach(obj=>{
        boxTracos.removeChild(obj)
    })

    tracejado('.boxGameAjuste', p)

}





