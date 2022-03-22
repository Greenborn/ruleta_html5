class PantallaPreguntas{
    ruleta        = null;
    boton_tirar   = null;
    selector      = null;
    btns_opciones = null;

    juegoConf = null;

    constructor( params ){
        this.juegoConf = params.configuracionJuego;
    }

    setRuleta( ruleta ){ this.ruleta = ruleta; }
    setBotonTirar ( boton_tirar ){ this.boton_tirar = boton_tirar; }
    setSelector( selector ){ this.selector = selector; }
    setBtnOpciones( btns_opciones ) { 
        this.btns_opciones = btns_opciones; 
        let difY      = 125;
        let anchoBtns = 240/2; 
        let i = 3;
        for (let c=1; c < 5 ; c++){
            this.btns_opciones[c].posicionar(this.juegoConf.width/2 -(i)*80 +anchoBtns, this.juegoConf.height-difY);
            this.btns_opciones[c].setOnClick( () => { this.opcion_btn_click(c); } );
            i--;
        }
    }

    opcion_btn_click( numero ){
        console.log( numero );
    }

    mostrarVista( pregunta_obtenida ){
        this.ruleta.ocultar();
        this.boton_tirar.ocultar();
        this.selector.ocultar();

        for (let c=1; c < this.btns_opciones.length; c++){
            this.btns_opciones[c].mostrar();
        }
        console.log( pregunta_obtenida )
    }
}