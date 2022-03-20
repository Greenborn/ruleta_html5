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
    let selector_r   = null;
    let boton_tirar  = null;

    function preload (){
        let configRuleta = {
            colorBorde: '#888',
            colorRelleno: 'yellow',
            anchoBordeExterior: 4,

            categorias:[
                { color: '#003880', nombre: 'Música' },
                { color: '#008039', nombre: 'Deportes' },
                { color: '#c7ad00', nombre: 'Historia' },
                { color: '#c70d00', nombre: 'Ciencia' },
                { color: '#c7008d', nombre: 'Cine' },
                { color: '#6700c7', nombre: 'Gastronomía' },
                { color: '#6700c7', nombre: 'Política' },
                { color: '#6700c7', nombre: 'Religión' },

            ]
        };
        ruleta = new Ruleta({ configuracionJuego:config, juego:this, configuracionRuleta:configRuleta } );
        ruleta.cargarImg();
        selector_r = new SelectorRuleta( { configuracionJuego:config, juego:this } );
        selector_r.cargarImg();
        boton_tirar = new BotonTirarRuleta( { configuracionJuego:config, juego:this, ruleta: ruleta } );
        boton_tirar.cargarImg();
    }

    function create (){
        ruleta.defPhaserSprite();
        selector_r.defPhaserSprite();
        boton_tirar.defPhaserSprite();
    }

    function update (){
        ruleta.update();
        boton_tirar.update();
    }
});