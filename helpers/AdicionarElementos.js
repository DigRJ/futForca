/*const adicionarBox = ( conj, ...uni )=>{
    this.conj = conj
    this.uni  =  uni

    this.uni.forEach( obj=>{   
       this.conj.appendChild(obj) 
    })
 
 }*/



 const adicionarBox = ( conj, ...uni )=>{

    uni.forEach( obj=>{

         conj.appendChild(obj) 

    })
 
 }