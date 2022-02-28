
class Componentes{
 
    constructor( ){}



    get main(){
        return this.main()
    }

    get header(){
        return this.header()
    }

    get footer(){
        return this.footer()
    }

    get div(){
        return this.div()

    }

    get article(){
        return this.article()
    }

    get section(){
        return this.section()
    }

    
    get nav(){
        return this.nav()
    }

    get span(){
        return this.span()
    }

    get p(){
        return this.p()
    }

    get a(){
        return this.a()
    }

    get label(){
        return this.label()
    }

    get form(){
        return this.form()
    }

    get fildset(){
        return this.fildset()
    }

    get input(){
        return this.input()
    }

    get radio(){
        return this.radio()
    }


    get button(){
        return this.button()
    }

    get select(){
        return this.select()
    }

    get option(){
        return this.option()
    }

    get img(){
        return this.option()
    }


    get table(){
        return this.table()
    }

    get tr(){
        return this.tr()
    }

    get th(){
        return this.th()
    }


 //---------------------------


    main(classList, id){

        let componente = document.createElement('main')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     header(classList, id){


      let componente = document.createElement('header')
      if(classList !== undefined){componente.classList = classList} 
      if(id        !== undefined){componente.id = id} 
      return componente 


    }

     footer(classList, id){

        let componente = document.createElement('footer')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     div(classList, id){
     
        let componente = document.createElement('div')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     article(classList, id){

        let componente = document.createElement('article')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     section(classList, id){

        let componente = document.createElement('section')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

    
     nav(classList, id){
        let componente = document.createElement('nav')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     span(classList, id){
        let componente = document.createElement('span')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     p(classList, id){

        let componente = document.createElement('p')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     a(classList, id){

        let componente = document.createElement('a')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     label(classList, id){

        let componente = document.createElement('label')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     form(classList, id){
        
        let componente = document.createElement('form')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     fildset(classList, id){

             
        let componente = document.createElement('fieldset')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     input(classList, id){

        let componente = document.createElement('input')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

    radio(classList, id){

        let componente = document.createElement('radio')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     button(classList, id){

        let componente = document.createElement('button')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 
    }

     select(classList, id){

        let componente = document.createElement('select')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

     option(classList, id){

        let componente = document.createElement('option')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }


    
    img(classList, id){

        let componente = document.createElement('img')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }


        
    table(classList, id){

        let componente = document.createElement('table')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }


    tr(classList, id){

        let componente = document.createElement('tr')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }

    
    th(classList, id){

        let componente = document.createElement('th')
        if(classList !== undefined){componente.classList = classList} 
        if(id        !== undefined){componente.id = id} 
        return componente 

    }





}


const componente = new Componentes( )