class ElementoJuego {
    phaserSprite = null;
    animacionSalida = false;
    imgURL = '';
    nombreImg = '';

    configJuego = null;
    juego       = null;

    x = 0;
    y = 0;

    constructor( params ){
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
        this.imgURL      = params.imgURL;
        this.nombreImg   = params.nombreImg;
    }

    getNombreImg(){
        return this.nombreImg;
    }

    cargarImg(){
        this.juego.load.svg( this.getNombreImg(), this.imgURL );
    }

    defPhaserSprite(){
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
        console.log (this.configJuego.scaleRatio);
        this.phaserSprite.setScale( this.configJuego.scaleRatio );
    }

    ocultar(){
        this.phaserSprite.visible = false;
    }

    mostrar(){
        this.phaserSprite.visible = true;
    }

    posicionar(x,y){
        this.x = x;
        this.y = y;
    }
}