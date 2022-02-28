
const tracejado = async ( classTag, p )=>{

    var arrPalavra  = await p[0].split('').map(o=>{ 
        return o = o!= " " &&  o!= "-" ? "_" :
        o == " " ? "⠀" : "-"
    })

     arrPalavra.forEach( obj  =>{
         
     var palavraTracejada  =  componente.p('traco')
     palavraTracejada.textContent = obj
     document.querySelector(classTag).appendChild(palavraTracejada)

    })
}
