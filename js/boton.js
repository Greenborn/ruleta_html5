class Boton extends ElementoJuego {
    x = 400;
    y = 550;
    delay = 150;
    click_btn = null;

    constructor ( params ){
        super( params );
    }

    onClick = ()=>{};
    setOnClick( funcion ){
        this.onClick = funcion;
    }

    cargarAudio(){
        this.juego.load.audio('click_btn', [ 'assets/audio/wclick.mp3' ]);
    }

    defAudio(){
        this.click_btn = this.juego.sound.add('click_btn');
    }

    defPhaserSprite(){
        let obj = this;
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg()).setInteractive();

        this.phaserSprite.on('pointerdown', function (pointer) {
            this.setTint(0xff0000); 
            obj.juego.sound.play('click_btn');
            setTimeout( ()=>{
                obj.onClick();
            }, obj.delay);
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