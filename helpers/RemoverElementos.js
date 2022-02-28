

 const removerBox = ( tagConj, ...tagUni )=>{


   
   const conj = document.querySelector(`.${tagConj}`)

   tagUni.forEach( obj=>{

      const uni = document.querySelector(`.${obj}`)

        conj.removeChild(uni) 

   })

}