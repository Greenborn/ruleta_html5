class Boton extends ElementoJuego {
    x = 400;
    y = 550;

    constructor ( params ){
        super( params );
    }

    onClick = ()=>{};
    setOnClick( funcion ){
        this.onClick = funcion;
    }

    defPhaserSprite(){
        let obj = this;
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg()).setInteractive();

        this.phaserSprite.on('pointerdown', function (pointer) {
            this.setTint(0xff0000); 
            obj.onClick();
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