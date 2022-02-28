

const dica = async  (dica)=> {

    const txt = await componente.p('txtDica')
    txt.textContent =  `Dica : ${dica}`
    return txt
    
}