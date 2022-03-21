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
            //a_i y a_f son angulo de inicio y fin de la categoria correspondientes a angle del sprite de la ruleta y se asignan despues
            //el id se usa para obtener las respuestas del arreglo (servicio a futuro) de preguntas
            categorias:[
                { id:0, color: '#dfdd48', a_i:0, a_f:0, nombre: 'Mitología'   },
                { id:1, color: '#7d03ff', a_i:0, a_f:0, nombre: 'Deportes'    },
                { id:2, color: '#ff8203', a_i:0, a_f:0, nombre: 'Gastronomía' }, //-27
                { id:3, color: '#36dc22', a_i:0, a_f:0, nombre: 'Música'      },
                { id:4, color: '#FFFFFF', a_i:0, a_f:0, nombre: 'Ciencia'     },
                { id:5, color: '#0bace8', a_i:0, a_f:0, nombre: 'Política'    },
                { id:6, color: '#bf32b7', a_i:0, a_f:0, nombre: 'Cine'        },             
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
    
        ruleta.setCallbackResultado( (r)=>{
            console.log(r);
        } );
    }

    function update (){
        ruleta.update();
        boton_tirar.update();
    }
});