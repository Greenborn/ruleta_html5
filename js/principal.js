window.addEventListener('load', function() {
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let juego        = new Phaser.Game(config);
    let objetosJuego = [];
    let ruleta       = null;

    function preload (){

    }

    function create (){
        ruleta = new Ruleta( config, this );
        ruleta.defPhaserSprite();
    }

    function update (){
    }
});