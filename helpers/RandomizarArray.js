


const randomizarArray = async ()=>{

   palavras.forEach( (obj,i) =>{

   let r =  Math.floor(Math.random()*i++)
   let temp = obj
   obj = palavras[r]
   palavras[r] = temp

  })
     return  palavras 
}