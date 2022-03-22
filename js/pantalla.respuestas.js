
class PantallaRespuesta {
    juegoConf = null;
    juego = null;

    ultimo_resultado = null;
    ultima_pregunta  = null;

    texto_result    = null;
    texto_respuesta = null;

    pantalla_ruleta = null;

    boton_sig     = null;

    ancho = 400;

    constructor( params ){
        this.juegoConf = params.configuracionJuego;
        this.juego     = params.juego;
    }

    preload(){
        this.boton_sig = new Boton( { configuracionJuego:this.juegoConf, juego:this.juego, imgURL:'./assets/btn_sig.svg', nombreImg:'btn_sig' } );
        this.boton_sig.cargarImg();
    }

    create(){
        this.boton_sig.defPhaserSprite();
        this.boton_sig.defAudio();
        this.boton_sig.ocultar();

        this.boton_sig.setOnClick( ()=> {
            this.ocultarVista();
        });
    }

    ocultarVista(){
        this.boton_sig.ocultar();
        if (this.texto_respuesta != null) { this.texto_respuesta.destroy(); }
        if (this.texto_result != null) { this.texto_result.destroy(); }

        this.pantalla_ruleta.mostrarVista();
    }

    mostrarVista( resultado, ultima_pregunta ){
        this.ultimo_resultado = resultado;
        this.ultima_pregunta  = ultima_pregunta;

        if (this.texto_respuesta != null) { this.texto_respuesta.destroy(); }
        if (this.texto_result != null) { this.texto_result.destroy(); }

        this.texto_result = this.juego.add.text(this.juegoConf.width/2, 50, '', 
                        { fontFamily: 'Andale Mono, Liberation Mono, Cousine', fontSize: 32, fontWeight: 'bold', color: '#00ff45' });
        
        if (this.ultimo_resultado)
            this.texto_result.setText('¡Respuesta Correcta!');
        else 
            this.texto_result.setText('¡Respuesta Incorrecta!');
        
        this.texto_result.setX( this.texto_result.x - this.texto_result.width/2 );

        this.texto_respuesta = this.juego.add.text(this.juegoConf.width/4, 150, '', 
                        { fontFamily: 'Andale Mono, Liberation Mono, Cousine', fontSize: 16, fontWeight: 'bold', color: '#00ff45' });
        
        this.texto_respuesta.setWordWrapWidth( this.ancho, true );
        if (this.ultima_pregunta.hasOwnProperty('rc')){
            this.texto_respuesta.setText(this.ultima_pregunta.rc);
        }

        this.boton_sig.mostrar();
    }
}