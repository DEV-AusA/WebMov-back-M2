const { default: axios } = require("axios");

const newContainerBannerHTML = (object) => {

    const {id, idTemp, poster, posterBg, title, year, overview, rate, duration, genre} = object;

    const divFirstCardBanner = document.createElement('div');
    divFirstCardBanner.classList.add('movie-preview');

    let firstCardBanner = ``;

    if (idTemp % 2 === 1) {
        firstCardBanner = `
        <div class="container-fluid p-0 card text-bg-dark">
            <div class="col-12 d-flex justify-content-end align-items-center pe-3">
                <img class="id="banner-${id} img-fluid" src="${posterBg}" alt="${title}">                
            </div>

            <div class="card-img-overlay ps-5 d-flex justify-content-start align-items-center z-1">
                <div class="col-6 card-movie">
                    <div class="card mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">
                            <div class="col-4 d-flex">
                                <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                            </div>                         
                            <div class="col-8">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-start">${title}</h1>
                                    <div class="row align-items-center">
                                        <div class="col-8 text-start pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small>${duration}</small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                        <div class="col-4 text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center">
                                                <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                    <h3 class="card-text">${rate}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                     
        </div>    
    `;
    
    } else {
        firstCardBanner = `
        <div class="container-fluid p-0 card text-bg-dark">
            <div class="col-12 d-flex justify-content-start align-items-center ps-3">
                <img class="id="banner-${id} img-fluid" src="${posterBg}" alt="${title}">                
            </div>

            <div class="card-img-overlay pe-5 d-flex justify-content-end align-items-center z-1">
                <div class="col-6 card-movie">
                    <div class="card mb-3 d-block shadow-lg bg-dark bg-opacity-50">
                        <div class="row g-0">                            
                            <div class="col-8">
                                <div class="card-body text-white pb-0">
                                    <h1 class="card-title fw-bold m-0 mb-4 text-end">${title}</h1>
                                    <div class="row align-items-center">
                                        <div class="col-4 text-center">
                                            <h1 class="card-title">Rate</h1>
                                            <div class="d-inline-flex justify-content-center">
                                                <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                    <h3 class="card-text">${rate}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-8 text-end pb-4 d-grid">
                                            <h6 class="m-0 fw-bolder">Release date:</h6>
                                            <p class="card-text">${year}</p>
                                            <h6 class="m-0 fw-bolder">Duration:</h6>
                                            <small>${duration}</small>
                                            <h6 class="card-title mt-3 mb-0 fw-bolder">Overview</h6>
                                            <p class="card-text">${overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 d-flex">
                                <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>                     
        </div>
    
    `;
    }
                
    divFirstCardBanner.innerHTML = firstCardBanner;
    return divFirstCardBanner;
};

const newContainerMainHTML = (object) =>{

    const {id, poster, title, year, rate, duration, director, genre} = object;
    const dir = director.director;
    // saco los values de cada object del array
    const gen = genre.map(objeto => objeto.genre).join('-');

    const colSeisCardMovie = document.createElement('div');
    colSeisCardMovie.classList.add('col-6', 'card-movie');
    colSeisCardMovie.id = `card-${id}`;

    const divCardMain = `
        <div class="card m-2 mx-auto d-block shadow-lg bg-white bg-opacity-75">
            <div class="row g-0">
                <div class="col-4">
                    <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h6 class="m-0 fw-bolder">Release date:</h6>
                                <p class="card-text">${year}</p>
                                <h6 class="m-0 fw-bolder">Duration:</h6>
                                <small class="text-body-secondary">${duration}</small>
                                <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                <p class="card-text">${dir}</p>
                                <h6 class="card-title mt-3 mb-0 fw-bolder">Genres</h6>
                                <p class="card-text fst-italic">${gen}</p>
                            </div>
                            <div class="col-4 text-center">
                                <h2 class="card-title">Rate</h2>
                                <div class="d-inline-flex justify-content-center">
                                    <div class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                        <h3 class="card-text">${rate}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    colSeisCardMovie.innerHTML = divCardMain;
    return colSeisCardMovie;
};

const newCardTrHTML = (object) =>{

    const {id, poster, title, year, rate, duration, genre} = object;

    const cardModieTr = document.createElement('div');
    cardModieTr.classList.add('col-2', 'card', 'mt-3', 'mx-2', 'p-0', 'pb-2', 'shadow', 'card-movie');
    cardModieTr.id = `card-tr-${id}`;

    const divCarTr = `
                <img src="${poster}" class="card-img-top" alt="...">
                    <div class="p-0 card-txt-tr">                        
                        <div class="col-12 d-flex">
                            <div class="col-4 card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${year}</p>                      
                            </div>
                            <div class="col-4 text-center d-flex justify-content-center align-items-start pt-3">
                                <div class="d-inline-flex">
                                    <div class="d-flex justify-content-center align-items-center rounded-5 rate-tr">
                                        <h3 class="card-text">${rate}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Miralo en +Play</a>
                    </div>     
    `;
    
    cardModieTr.innerHTML = divCarTr;
    return cardModieTr;
};

const newCardBannerSugeHTML = (object) => {

    const {id, idSuge, poster, title, year, director, duration, rate, genre} = object;
    const dir = director.director;

    const divCardBannerSuge = document.createElement('div');
    divCardBannerSuge.classList.add('movie-preview');

    let cardBannerSuge = ``;

    if (idSuge % 2 === 1) {
        cardBannerSuge = `
    <div class="container-fluid row p-0 m-0 container-card-bg position-relative">                
                <div class="col-4 ps-5 d-flex align-items-center z-1">
                    <div class="card-movie">
                        <div class="card mb-3 mx-auto d-block shadow-lg bg-dark bg-opacity-50">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                                </div>
                                <div class="col-8">
                                    <div class="card-body text-white pb-0">
                                        <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                                        <div class="row align-items-center">
                                            <div class="col-8">
                                                <h6 class="m-0 fw-bolder">Release date:</h6>
                                                <p class="card-text">${year}</p>
                                                <h6 class="m-0 fw-bolder">Duration:</h6>
                                                <small>${duration}</small>
                                                <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                                <p class="card-text">${dir}</p>
                                            </div>

                                            <div class="col-4 text-center">
                                                <h2 class="card-title">Rate</h2>
                                                <div class="d-inline-flex justify-content-center">
                                                    <div
                                                        class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                        <h3 class="card-text">${rate}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8 p-0 video-banner-l z-0 banner-img img-carousel-${idSuge}">
                    <div id="banner-${idSuge}" class="w-100 h-100 img-fluid">
                    </div>
                </div>
            </div>
    
    `;
    
    } else {
        cardBannerSuge = `
    <div class="container-fluid row p-0 m-0 container-card-bg position-relative">
                <div class="col-8 p-0 video-banner-r z-0 banner-img img-carousel-${idSuge}">
                    <div id="banner-${idSuge}" class="w-100 h-100 img-fluid">
                    </div>
                </div>                
                <div class="col-4 ps-5 d-flex align-items-center z-1">
                    <div class="card-movie">
                        <div class="card mb-3 mx-auto d-block shadow-lg bg-dark bg-opacity-50">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img class="img-fluid rounded-start" src="${poster}" alt="${title}">
                                </div>
                                <div class="col-8">
                                    <div class="card-body text-white pb-0">
                                        <h3 class="card-title fw-bold m-0 mb-4">${title}</h3>
                                        <div class="row align-items-center">
                                            <div class="col-8">
                                                <h6 class="m-0 fw-bolder">Release date:</h6>
                                                <p class="card-text">${year}</p>
                                                <h6 class="m-0 fw-bolder">Duration:</h6>
                                                <small>${duration}</small>
                                                <h6 class="card-title mt-3 mb-0 fw-bolder">Director</h6>
                                                <p class="card-text">${dir}</p>
                                            </div>

                                            <div class="col-4 text-center">
                                                <h2 class="card-title">Rate</h2>
                                                <div class="d-inline-flex justify-content-center">
                                                    <div
                                                        class="d-flex justify-content-center align-items-center rounded-bottom rate">
                                                        <h3 class="card-text">${rate}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
    
    `;
    }
                
    divCardBannerSuge.innerHTML = cardBannerSuge;
    return divCardBannerSuge;
};

const cleanInputs = () => {

    //limpiar intups
    const inputsForm = document.querySelectorAll('.form-control');
    inputsForm.forEach((input) => {
        input.value = '';
    });
    // limpiar selects
    const selectsForm = document.querySelectorAll('.form-select');
    selectsForm.forEach((select) => {
        select.selectedIndex = 0;
    });
    // desmarcar checkboxes
    const checkboxesForm = document.querySelectorAll('.form-check-input');
    checkboxesForm.forEach((checkbox) => {
        checkbox.checked = false;
    });
};

const sendForm = async (movie) => {
    try {
        axios.post('http://localhost:3000/movies/', movie);
        alert("¡Pelicula agregada correctamente");
    } catch (error) {
        alert("Hubo un error la pelicula no se pudo agregar.", error);
    }
}

const validateForm = (event) => {    

    event.preventDefault(); // Evita el envio del formulario por defecto debido al button de type=submit
    const form = document.querySelector('.needs-validation'); 
    // Agregar la clase 'was-validated' al formulario
    form.classList.add('was-validated'); 

    // Verifico si el formulario cumple con ciertas condiciones enviar la movie
    if (form.checkValidity() && form.querySelectorAll(':invalid').length === 0) {
        
        const movie = formFromInputsHTML();
        //envio pelicula
        const { title, year, duration, rate, poster, overview, adult, backdrop_path, original_language, video, director, genres } = movie;
        sendForm({ title, year, duration, rate, poster, overview, adult, backdrop_path, original_language, video, director, genres});

        // limpio inputs despues de enviar
        cleanInputs();
        //remuevo la clase was-validated
        form.classList.remove('was-validated');
    }
};

const formFromInputsHTML = () => {
    
    // con esto prevengo que el btn submit deje capturar el contenido de todos los inputs y evitar que no se capture el primero input
    
    const title = document.getElementById('form-title').value;

    const originalLanguageForm = document.getElementById('form-language').value;
    let originalLanguage = '';

    switch (originalLanguageForm) {
        case 'English':
            originalLanguage= 'En';
            break;
        case 'Spanish':
            originalLanguage= 'Es';
            break;
        case 'Spanish LATAM':
            originalLanguage= 'Esmx';
            break;
        case 'French':
            originalLanguage= 'Fr';
            break;
        case 'Chinese':
            originalLanguage= 'Cn';
            break;
        case 'Russian':
            originalLanguage= 'Ru';
            break;
        case 'Japanese':
            originalLanguage= 'Jp';
            break;
        case 'Korean':
            originalLanguage= 'Ko';
            break;
        default:
            break;
    };    

    const isToAdult = document.getElementById('form-adult').value;
    const adult = isToAdult == 'Si' ? true : false;

    let genres = [];
    for (let i = 1; i <= 3; i++) {
        const getGenresId = document.getElementById(`form-genre${i}`);
        if (getGenresId) {
          genres.push(getGenresId.value);
        }
    };

    const year = document.getElementById('form-release-date').value;
    const duration = document.getElementById('form-duration-movie').value + ' ' + document.getElementById('form-duration-movie-min').value;
    const rate = document.getElementById('form-vote-average').value;
    const poster = document.getElementById('form-post-card').value;
    const overview = document.getElementById('form-overview').value;
    const director = document.getElementById('form-director').value;
    // const backdropPath = document.getElementById('form-post-card-bg').value;
    const backdropPath = poster;
    const adminName = document.getElementById('form-admin-name').value;
    const adminToken = document.getElementById('form-admin-name-tk').value;

    const objectMovie = {
        title: title,
        year: year,
        duration: duration,
        rate: rate,
        poster: poster,
        overview: overview,
        adult: adult,
        backdrop_path: backdropPath,
        original_language: originalLanguage,

        director: director,
        genres: genres

    };
    return objectMovie;
}

const buttonCleanInputs = () => {
    const btnCleanForm = document.getElementById('clean-button-form');
    btnCleanForm.addEventListener('click', cleanInputs);
};

const buttonSendForm = () =>{
    const btnSendform = document.getElementById('send-button-form');
    btnSendform.addEventListener('click', validateForm);
    // con esto prevengo que el btn submit deje capturar el contenido de todos los inputs y evitar que no se capture el primero input
    // event.preventDefault();    
};

const buttonAddMovieGenreForm = (idGenre) => {
    const divGenre = document.createElement('div');

    divGenre.classList.add('col-2', 'py-2');

    const genre = `
                    <div class="col-md-12">
                        <div class="genres">
                            <select class="form-select me-2 col-3" id="form-genre${idGenre}" required>
                              <option selected disabled value="">Elige una género</option>
                              <option>Action</option>
                              <option>Adventure</option>
                              <option>Animation</option>
                              <option>Comedy</option>
                              <option>Crime</option>
                              <option>Documentary</option>
                              <option>Drama</option>
                              <option>Family</option>
                              <option>Family</option>
                              <option>Fantasy</option>
                              <option>History</option>
                              <option>Horror</option>
                              <option>Music</option>
                              <option>Mystery</option>
                              <option>Romance</option>
                              <option>Science Fiction</option>
                              <option>TV Movie</option>
                              <option>Thriller</option>
                              <option>War</option>
                              <option>Western</option>
                            </select>
                            <div class="invalid-feedback">
                              Por favor selecciona un género.
                            </div>
                        </div>
                    </div>
    `;

    divGenre.innerHTML = genre;
    return divGenre;
};

module.exports = {
    newContainerBannerHTML,
    newContainerMainHTML,
    newCardTrHTML,
    newCardBannerSugeHTML,
    buttonCleanInputs,
    buttonSendForm,
    buttonAddMovieGenreForm
}