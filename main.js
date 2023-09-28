function tocaSom (seletorAudio) {
    const elemento = documento.queySelector(seletorAudio);

    if (elemento && elemento.localName === `audio`){
        elemento.play();
    }
    else{
        //alert(`Elemento não encontrado`);
        console.log(`elemento não encontrado ou eletor inválido`);
    }
}