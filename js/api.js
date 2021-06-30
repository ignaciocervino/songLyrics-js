import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
        this.consultarAPI();
    }

    consultarAPI(){
        const url = `https://private-anon-904e9e814d-lyricsovh.apiary-mock.com/v1/${this.artista}/${this.cancion}`;

        fetch(url,{mode: 'no-cors'})
            .then(respuesta => respuesta.json())
            .then(resultado=>{
                if (resultado.lyrics) {
                    const {lyrics}=resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
                }
                else{
                    UI.divMensajes.textContent = 'La cancion no existe, prueba con otra búsqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');

                    }, 3000);
                }
                
            })
    }
}

export default API;