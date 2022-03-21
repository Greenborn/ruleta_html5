
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

    ultimo_resultado    = null;
    callback_resultado  = null;
    resultado_entregado = true;

    intervalo_subdivision = null;

    constructor ( params ){
        this.configJuego = params.configuracionJuego;
        this.juego       = params.juego;
        this.config      = params.configuracionRuleta;
        
        this.intervalo_subdivision = 360/this.config.categorias.length;

        //Se asignan los valores de angulos a las categorias
        //Se usan angulos de 0 a 360 como seria lògico
        for (let c=0; c < this.config.categorias.length; c++){
            this.config.categorias[c].a_i =  c*this.intervalo_subdivision;
            this.config.categorias[c].a_f = (c+1)*this.intervalo_subdivision;
        }
        console.log(this.config.categorias);
    }

    getNombreImg(){
        return 'ruleta';
    }

    setCallbackResultado( callback ){
        this.callback_resultado = callback;
    }

    cargarImg(){
        this.juego.load.svg( this.getNombreImg(), this.imgURL );
    }

    defPhaserSprite(){
        this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
        console.log(this.phaserSprite.angle)
    }

    getResultado(){
        //Se le suma 90º por que el selector esta arriba, no a la derecha de la ruleta
        let pos = anguloPhaserAComun( this.phaserSprite.angle + 90 );
        this.ultimo_resultado = null;

        for (let c=0; c < this.config.categorias.length; c++){
            if ( numeroEntre(pos, this.config.categorias[c].a_i, this.config.categorias[c].a_f) ){
                this.ultimo_resultado = this.config.categorias[c];
                break;
            }
        }
        return { R:this.ultimo_resultado, P:pos, A: this.phaserSprite.angle };
    }

    update(){
        this.phaserSprite.angle += this.velocidad;

        this.velocidad += this.aceleracion; 

        if (this.velocidad < 0){
            this.velocidad = 0;
            if (!this.resultado_entregado){
                this.resultado_entregado = true;
                this.callback_resultado( this.getResultado() );
            }
        }
    }

    tirar(){
        this.resultado_entregado = false;
        this.aceleracion = - ((Math.random() * 3)+3)/30;
        this.velocidad   = Math.floor(Math.random() * 30)+15;
    }
}