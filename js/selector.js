class SelectorRuleta extends ElementoJuego {
    imgURL = './assets/select_ruleta.svg';

    configJuego = null;
    juego       = null;

    x = 400;
    y = 40;

    constructor ( params ){
        super( params );
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
    }

    getNombreImg(){
        return 'select_ruleta';
    }

}