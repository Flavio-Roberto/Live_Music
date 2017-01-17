function inicio(){
    
    if (document.form1.genero.value == 1) {
       artista_pop.style.display='block'
       banda_rock.style.display='none'
       banda_rap.style.display='none'    
}
    else{
        if(document.form1.genero.value == 2){
        banda_rock.style.display='block'
        artista_pop.style.display='none'
        banda_rap.style.display='none'
    }
        if (document.form1.genero.value == 3) {
        banda_rap.style.display='block'
        banda_rock.style.display='none'
        artista_pop.style.display='none'
    } 
}
}


function artista() {
    if (document.form1.artista_pop2.value == 1) {
        taylor.style.display='block'
        gaga.style.display='none'    
}
    if (document.form1.artista_pop2.value == 2) {
        gaga.style.display='block'
        taylor.style.display='none'
    }
}


// Prosseguir
function pross(){

//Taylor Value
if (document.form1.album_taylor.value == 1) {
    swift.style.display='block'
    lady.style.display='none'
}

//Lady GaGa Value

if (document.form1.album_gaga.value == 1) {
    lady.style.display='block'
    swift.style.display='none'
}

}