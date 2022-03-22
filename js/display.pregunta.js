
class DisplayPreguntas extends ElementoJuego{
    x = 400;
    y = 40;
    alto = 80;
    ancho = 400;

    pregunta_actual = null;
    texto = null;

    constructor ( params ){
        super( params );
    }

    cargar_pregunta( pregunta ){
        this.pregunta_actual = pregunta;
        if (this.texto != null){
            this.texto.destroy();
        }
        this.texto = this.juego.add.text(this.x-this.ancho/2+10, this.y-this.alto/2+10, '', 
                        { fontFamily: 'Andale Mono, Liberation Mono, Cousine', fontSize: 21, color: '#00ff45' });
        this.texto.setWordWrapWidth( this.ancho, true );
        this.texto.setText('¿'+this.pregunta_actual.t+'?');
    }

    ocultar(){
        super.ocultar();
        if ( this.texto != null)
            this.texto.destroy();
    }
}