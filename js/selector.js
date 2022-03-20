class SelectorRuleta{
    imgURL = './assets/select_ruleta.svg';

    configJuego = null;
    juego       = null;

    phaserSprite = null;

    x = 400;
    y = 40;

    constructor ( params ){
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
    }

    getNombreImg(){
        return 'select_ruleta';
    }

    cargarImg(){
        this.juego.load.svg( this.getNombreImg(), this.imgURL );
    }

    defPhaserSprite(){
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
    }
}