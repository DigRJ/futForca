

const teclado  = async (classTag, p)=>{

    const alfabeto   = await ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('')
    const Teclado    = await document.querySelector(classTag)
   
     alfabeto.forEach(obj =>{
        const tecla         =  componente.button('letra')
        tecla.textContent   = obj
        tecla.onclick       = ((e)=>{ 

            if(ogame){
             verificar( p , e.target )}

        })
        Teclado.appendChild(tecla)
    })




}