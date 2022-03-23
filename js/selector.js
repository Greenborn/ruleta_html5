class SelectorRuleta extends ElementoJuego {
 
    constructor ( params ){
        super( params );
        
        this.posicionar( this.configJuego.width / 2, this.configJuego.height / 10 );
    }

}