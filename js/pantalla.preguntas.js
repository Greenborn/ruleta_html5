class PantallaPreguntas{
    ruleta        = null;
    boton_tirar   = null;
    selector      = null;
    btns_opciones = null;
    display_pregs = null;

    juegoConf = null;

    ultima_pregunta = null;
    lista_respuesta = null;
    respuesta_selec = null;
    resultado_ultima_r = false;

    textos_respuestas = [];

    constructor( params ){
        this.juegoConf = params.configuracionJuego;
        this.juego     = params.juego;
    }

    setRuleta( ruleta ){ this.ruleta = ruleta; }
    setBotonTirar ( boton_tirar ){ this.boton_tirar = boton_tirar; }
    setSelector( selector ){ this.selector = selector; }
    
    setDisplayPregs( display_preg ){ 
        this.display_pregs = display_preg; 
        this.display_pregs.posicionar( this.juegoConf.width/2, 50 );
    }

    setBtnOpciones( btns_opciones ) { 
        this.btns_opciones = btns_opciones; 
        let difX = 125;
        let difY = 240/2; 
        let i = 3;
        for (let c=1; c < 5 ; c++){
            this.btns_opciones[c].posicionar( difX, this.juegoConf.width/2 -(i)*80 +difY);
            this.btns_opciones[c].setOnClick( () => { this.opcion_btn_click(c); } );
            i--;
        }
    }

    opcion_btn_click( numero ){
        this.respuesta_selec = null;
        for (let c=0; c < this.lista_respuesta.length; c++){
            if (this.lista_respuesta[c].n == numero){
                this.respuesta_selec = this.lista_respuesta[c];
                break;
            }
        }
        this.comprobar_respuesta();
    }

    comprobar_respuesta(){
        if (this.respuesta_selec == null){
            this.respuesta_incorrecta();
            return false;
        }

        if (this.respuesta_selec.r.c == 1){
            this.respuesta_correcta();
        } else {
            this.respuesta_incorrecta();
        }
    }

    respuesta_incorrecta(){
        this.resultado_ultima_r = false;
        console.log(0);
    }

    respuesta_correcta(){
        this.resultado_ultima_r = true;
        console.log(1);
    }

    mostrarVista( pregunta_obtenida ){
        this.ruleta.ocultar();
        this.boton_tirar.ocultar();
        this.selector.ocultar();

        this.display_pregs.mostrar();

        for (let c=1; c < this.btns_opciones.length; c++){
            this.btns_opciones[c].mostrar();
        }

        this.ultima_pregunta = pregunta_obtenida;
        this.lista_respuesta = [];
        let difX = 170;
        let difY = 240/2-10; 
        let i = 3;
        for (let c=0; c< this.ultima_pregunta.r.length; c++){
            this.lista_respuesta.push({ n:c+1, r:this.ultima_pregunta.r[c]  })
            if (this.textos_respuestas[c] != undefined){
                this.textos_respuestas[c].destroy();
            }
            this.textos_respuestas[c] = this.juego.add.text(difX, this.juegoConf.width/2 -(i)*80 +difY, '', 
                            { fontFamily: 'Andale Mono, Liberation Mono, Cousine', fontSize: 20, color: '#00ff45' });
            this.textos_respuestas[c].setText( this.ultima_pregunta.r[c].t );
            i--;
        }

        this.display_pregs.cargar_pregunta( this.ultima_pregunta );
    }
}