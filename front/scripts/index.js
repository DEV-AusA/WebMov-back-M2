const { 
    fetchMovies,
 } = require("./api");

const {
    cargarCardBanner,
    cargarCardMain,
    cargarCardTr,
    cargarCardBannerSuge,
    bntsNavHoverActive,
    rateColorMain,
    rateColorTr,
    eventCargarGenreForm
} = require("./functions");

const {
    buttonCleanInputs,
    buttonSendForm,
} = require("./divsHTML");

//creo una function para recibir la promesa del API y poder manipular los datos
estrenos = async () => {
    try {
        // espero la respuesta positiva de la promesa en fetchMovies
        const dataApi = await fetchMovies();
        // const dataApiTR = await topRanked();
        // const dataApiSuge = await sugeMovies();

        // data API 1
        const dataIndex = [];

        // uso una idTemp para el modelo del front
        let id_temp = 1
        dataApi.forEach(movie => {
            // destructuro valores de propiedades xq JS tiene problemas con nombres con _ como 'poster_path' y 'release_date'
            const id = movie._id;
            const idTemp = id_temp;
            const title = movie.title;
            const year = movie.year;
            const director = movie.director;
            const duration = movie.duration;
            const genre = movie.genre;
            const rate = Math.floor(movie.rate*10);
            const overview = movie.overview;
            
            // desactivado mientras, xq solo funciona con mi db
            // const image = movie.poster;
            // const imageBg = movie.backdrop_path;
            // const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+ image;
            // const posterBg = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'+ imageBg;

            const poster = movie.poster;
            const posterBg = poster;

            const dataPura = {id, idTemp, title, year, director, duration, genre, rate, overview, poster, posterBg};            

            id_temp++;
            dataIndex.push(dataPura);
        });

        // estrenos
        if (document.getElementById('body-estrenos')) {
            dataIndex.forEach((movie) => cargarCardBanner(movie));
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain(); 
        }
        // topRank
        //* PRIMERO SE MUESTRAN las que mas arriba de 8.0 de rate, luego el resto en otro container
        else if (document.getElementById('body-top-rank')) {
            dataIndex.forEach((movie) => {
                //* rate > 8
                if (movie.rate > 80) {
                    cargarCardTr(movie)
                    rateColorTr();                    
                };
            });
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain();
        }
        // index
        else if (document.getElementById('body-index')) {

            // usando idSuge para la function onYouTubeIframeAPIReady - buscar mejora a futuro
            let idSuge = 1;

            // 3 sugerencias por para ponerle videos propios - buscar mejora a futuro
            // desactivo videos - solo funcionan con titulos puntuales
            const suge1 = "Guardians of the Galaxy Vol. 2";
            const suge2 = "Star Wars: Episode IV - A New Hope";
            const suge3 = "The Lord of the Rings: The Fellowship of the Ring";

            dataIndex.forEach((movie) => {

                if (idSuge <= 3) {
                    movie.idSuge = idSuge;
                    cargarCardBannerSuge(movie);                 
                    idSuge++;
                };

                // if (movie.title === suge1 || movie.title === suge2 || movie.title === suge3) {
                //     movie.idSuge = idSuge;
                //     cargarCardBannerSuge(movie)                    
                //     idSuge++;
                // };
            });
            dataIndex.forEach((movie) => cargarCardMain(movie));
            rateColorMain();
        }
        // Devs
        else if (document.getElementById('body-devs')) {
            buttonCleanInputs();
            buttonSendForm();
            eventCargarGenreForm();
        }
        
    } catch (error) {
        throw new Error("No se pudo completar la solicitud de fetchMovies");
        
    }
};
estrenos();
bntsNavHoverActive();


