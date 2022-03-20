
class Ruleta {
    imgURL = './assets/ruleta.svg';
        
    phaserSprite = null;

    configJuego = null;
    config      = null;
    juego       = null;

    diametro   = 0;
    radio      = 0;
    x          = 400;
    y          = 250;

    velocidad   = 0;
    aceleracion = -.1;

    constructor ( params ){
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
        this.config      = params.configuracionRuleta;
    }

    getNombreImg(){
        return 'ruleta';
    }

    cargarImg(){
        this.juego.load.svg( this.getNombreImg(), this.imgURL );
    }

    defPhaserSprite(){
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
    }

    update(){
        this.phaserSprite.angle += this.velocidad;

        this.velocidad += this.aceleracion; 

        if (this.velocidad < 0){
            this.velocidad = 0;
        }
    }

    tirar(){
        this.aceleracion = - ((Math.random() * 3)+3)/30;
        this.velocidad   = Math.floor(Math.random() * 30)+15;
    }
}