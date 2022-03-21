class PantallaPreguntas{
    ruleta      = null;
    boton_tirar = null;
    selector    = null;

    setRuleta( ruleta ){ this.ruleta = ruleta; }
    setBotonTirar ( boton_tirar ){ this.boton_tirar = boton_tirar; }
    setSelector( selector ){ this.selector = selector; }

    mostrarVista( pregunta_obtenida ){
        this.ruleta.ocultar();
        this.boton_tirar.ocultar();
        this.selector.ocultar();
        console.log( pregunta_obtenida )
    }
}