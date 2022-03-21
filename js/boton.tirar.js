class BotonTirarRuleta extends ElementoJuego {
    imgURL = './assets/btn_tirar.svg';

    configJuego = null;
    juego       = null;
    ruleta      = null;

    x = 400;
    y = 500;

    constructor ( params ){
        super( params );
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
        this.ruleta      = params.ruleta;
    }

    getNombreImg(){
        return 'btn_tirar';
    }

    defPhaserSprite(){
        let obj = this;
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg()).setInteractive();

        this.phaserSprite.on('pointerdown', function (pointer) {
            this.setTint(0xff0000); 
            obj.ruleta.tirar();
        });

        this.phaserSprite.on('pointerup', function (pointer) {
            this.clearTint();
        });

        this.phaserSprite.on('pointerout', function (pointer) {
            this.clearTint();
        });
    }

    update(){
        
    }
}