class ElementoJuego {
    phaserSprite = null;
    animacionSalida = false;

    cargarImg(){
        this.juego.load.svg( this.getNombreImg(), this.imgURL );
    }

    defPhaserSprite(){
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
    }

    ocultar(){
        this.phaserSprite.visible = false;
    }

    mostrar(){
        this.phaserSprite.visible = true;
    }
}