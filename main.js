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

const ListaDeTeclas = document.querySelectorAll(´.tecla´);

//para
for(let contador< ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio = ´#som_${instrumento}´; //yemplate tring  

    tecla.onclick = funtion (evento) {
        tocaSom(idAudio);
    }

    tecla.onkeydown = funtion (){

        if (evento.code === ´space´ || evento.code === ´enter´) {
            tecla.classlist.add(´ativa´);
        }

    }

    tecla.onkeyup = funtion (){
        tecla.classlist.remove(´ativa´);
    }
}
