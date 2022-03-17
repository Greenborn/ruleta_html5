
class Ruleta {
    //Usado para el sprite de pahser
    imgObj = null;

    //Usado para la edicion de la img nueva creada
    imgData      = null;
    imgDataBuf   = null;
    imgDataBuf8  = null;
    imgDataE     = null;
    imgPixelCant = 0;

    imgCtx    = null;
    imgCanvas = null;
    imgB64    = null;
    
    phaserSprite = null;

    config = null;

    diametro   = 0;
    radio      = 0;
    x          = 400;
    y          = 400;

    constructor ( configuracion, juego ){
        this.config = configuracion;
        this.juego  = juego;
        this.crearImagen();
    }

    getNombreImg(){
        return 'ruleta';
    }

    crearImagen(){
        //se define que el diametro de la ruleta será un 50% del ancho de la pantalla
        this.diametro = this.config.width / 2;
        this.radio    = this.diametro / 2;

        //Se crea un nuevo elemento de img vacio
        this.imgObj   = new Image( this.diametro, this.diametro );

        //Se crea nuevo elemento canvas que se usa como intermediario en la edición
        this.imgCanvas = document.createElement('canvas');
        this.imgCanvas.setAttribute('width', this.diametro+'px'); 
        this.imgCanvas.setAttribute('height', this.diametro+'px'); 
        this.imgCtx = this.imgCanvas.getContext('2d');
        
        console.log(this.imgCanvas);
        this.imgData       = this.imgCtx.getImageData( 0, 0, this.diametro, this.diametro );
        this.imgDataBuf    = new ArrayBuffer( this.imgData.data.length );
        this.imgDataBuf8   = new Uint8ClampedArray( this.imgDataBuf );
        this.imgDataE      = new Uint32Array( this.imgDataBuf );
        this.imgPixelCant  = this.diametro * this.diametro;
        
        //Se modifican los pixeles de la img
        for (let px=0; px < this.diametro; px++){
            for (let py=0; py < this.diametro; py++){

                //dibujamos el circulo (x - cx)´2 + (y - cy)'2 = r'2
                if ( Math.pow( (px - this.radio) ,2) + Math.pow( (py - this.radio), 2) <= Math.pow( this.radio, 2 ) ){
                    this.imgDataE[(py * this.diametro) + px] = (255 << 24)      | // alpha
                                                            (  0 << 16) | // blue
                                                            (  0 <<  8) | // green
                                                                255;
                }
            }
        }

        this.imgData.data.set( this.imgDataBuf8 );
        this.imgCtx.putImageData( this.imgData, 0, 0);

        //Se 'exporta' la img
        this.imgB64     = this.imgCanvas.toDataURL();
        this.imgObj.src = this.imgB64;
    }

    defPhaserSprite(){
        this.juego.textures.once('addtexture', function () {
            this.phaserSprite = this.juego.add.sprite(this.x, this.y, this.getNombreImg());
            return this.phaserSprite;
        }, this);
        this.juego.textures.addBase64( this.getNombreImg(), this.imgB64 );
    }
}