



const game = async ( classTag )=>{

    objGame =  await {
     box              :  document.querySelector(classTag),
     boxGame          :  componente.div('boxGame'),
     boxGameBarraTop  :  componente.section('boxGameBarraTop'),
     boxTopTxt        :   componente.p('boxTopTxt'),
     boxGameLevel     :  componente.section('boxGameLevel'),
     boxGameChances   :  componente.section('boxGameChances'),
     boxGameChanceTxt :  componente.p('boxGameChanceTxt'),
     boxGameVidas     :  componente.p('boxGameVidas'),
     boxGameDica      :  componente.section('boxGameDica'),
     boxGameTracos    :  componente.section('boxGameTracos'),
     boxGameAjuste    :  componente.p('boxGameAjuste'),
     boxGameTeclado   :  componente.section('boxGameTeclado'),
     boxGameFooter    :  componente.section('boxGameFooter')
} 

    conjPalavras           = await  randomizarArray(palavras).then(o=> {return  o})
    palavra                = await  conjPalavras[0]

    objGame.boxTopTxt.textContent        = "qualÉoTimE ? "
    objGame.boxGameChanceTxt.textContent = "Nº de chances "
    objGame.boxGameVidas.textContent     = chances.toString()


     tracejado ('.boxGameAjuste'   , palavra)
     teclado   ('.boxGameTeclado'  ,palavra[0])
     dica      (palavra[1]).then(o =>{objGame.boxGameDica.appendChild(o)})


     

    adicionarBox(
        objGame.box,
        objGame.boxGame
    )

    adicionarBox(
        objGame.boxGameBarraTop,
        objGame.boxTopTxt
    )

    adicionarBox(
        objGame.boxGameTracos,
        objGame.boxGameAjuste
    )

    
    adicionarBox(
        objGame.boxGameChances,
        objGame.boxGameChanceTxt,
        objGame.boxGameVidas,
    )

    adicionarBox(
        objGame.boxGame,
        objGame.boxGameBarraTop,
        objGame.boxGameLevel,
        objGame.boxGameChances,
        objGame.boxGameTracos,
        objGame.boxGameDica,
        objGame.boxGameTeclado,
        objGame.boxGameFooter
    )
} 

document.addEventListener("DOMContentLoaded", function(event) {
    game('.centro')
  });

