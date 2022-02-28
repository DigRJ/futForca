
var p = 0 

const verificar = async (palavra , e )=>{

    //ARRAY DE TRAÇOS
    var tracejado  = await document.querySelectorAll('.traco')

    //CHAMANDO  FUNÇÃO DE TRATAMENTO DE CARACTERES ESPECIAIS 
     caracteresEspeciais(e.textContent.toLowerCase(), palavra , '.traco', e )

    // VERIFICANDO SE EXISTE O CARACTER SELECIONADO NA PALAVRA
    if(palavra.includes(e.textContent.toString().toLowerCase().trim())){

          for(let i = 0 ; i < palavra.length; i++){

            if(palavra[i].toString().toLowerCase() == e.textContent.toLowerCase()){
                
                 tracejado[i].textContent  =  e.textContent
                 e.style.backgroundColor = 'Green'
                 e.onclick = null
                 e.style.color = 'White'                 
            }
        }      
    }

    else{

         if(charEspec == false){
            e.style.backgroundColor = 'Red'
            e.style.color = 'White'
            e.onclick = null
            numeroDeChances(chances)
         }

        charEspec = false

    }

    passouDeFase('.traco').then(o=>{
     
    if(o == true && ogame ==true){

       level++
       palavra =  conjPalavras[level]
       resetTeclado(palavra[0])
       resetTracejado(palavra)
       chances =  5 
       document.querySelector('.txtDica').textContent = `Dica : ${palavra[1]}`    
       document.querySelector('.boxGameVidas').textContent = chances.toString()     
 
    }

})

}


// TRATAR CARACTERES ESPECIAIS 
const caracteresEspeciais  = async (caracter, p, classTag, target)=>{

    function arrCaracteres( p, arr ){

      var arrPalavra = p.split('')
      var conj = document.querySelectorAll(classTag)

        arr.forEach(async(obj)=>{

            if(arrPalavra.indexOf(obj) != null && arrPalavra.indexOf(obj) != -1){ 
                let pos = await arrPalavra.indexOf(obj)
                conj[pos].textContent = await obj.toString().toUpperCase()
                target.style.backgroundColor = 'Green'
                target.style.color = 'White'
                charEspec = await true
            }
        })
    }

    switch(caracter){

        case "a" :
            especiais = ["à","á","â","ã"]
            arrCaracteres(p,especiais)
        break;
        case "e" :
            especiais = ["é","ê"]
            arrCaracteres(p,especiais)

        break;
        
        case "i" :
            especiais = ["í"]  
            arrCaracteres(p,especiais)
  
        break;
        case "o" : 
            especiais = ["ó","ô","õ","ö"]   
            arrCaracteres(p,especiais)

        break;
        
        case "u" :
            especiais = ["ú"]   
            arrCaracteres(p,especiais)

        break;

        case "n" :
            especiais = ["ñ"]   
            arrCaracteres(p,especiais)
        break;

        case "c" :
            especiais = ["ç"]   
            arrCaracteres(p,especiais)
        break;

        case "s" :
            especiais = ["ş"]   
            arrCaracteres(p,especiais)
        break;
    }
}


// VERIFICAR SE ADVINHOU PALAVRA POR COMPLETO
const passouDeFase = async (classTag)=>{

    var arr     =  document.querySelectorAll(classTag)
    var passou  =  true 
    arr.forEach( async o=>{  if(o.textContent == "_" ){passou =  false }})

    return passou
}

let proximaPalavra = async (arr , fase) =>{
    return arr[fase]
}



var numeroDeChances = async (c)=>{

     c--
     palavrax =  conjPalavras[level]

     if( c > 0  ){
        document.querySelector('.boxGameVidas').textContent= c
    } 
    else{

            ogame = false 
        document.querySelector('.boxGameVidas').textContent= "GAME OVER"
        document.querySelector('.boxGameVidas').style.fontSize = '40px'

        const btn = componente.button('fim')
        btn.onclick = (()=>{

           window.location.reload()

        })
        btn.textContent = "Recomeçar ?"
   
            let t   = await  document.querySelectorAll('.traco')
            let pos = await  setInterval(()=>{

                if( p < palavrax[0].length){
                    t[p].style.color = "IndianRed"
                    t[p].textContent = 
                    t[p].textContent != "⠀" && t[p].textContent != "-"?
                    palavrax[0][p].toUpperCase():t[p].textContent
                

                }else{
                      
                    clearInterval(pos)
                }
              
                p ++

            },200)

        document.querySelector('.boxGameChanceTxt').textContent=""
        document.querySelector('.boxGameChances').appendChild(btn)

    }

     chances = c 
}