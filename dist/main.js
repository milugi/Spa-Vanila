(()=>{"use strict";const e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",n=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n    ',t={"/":async()=>{const e=await(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=24619fe1fc7bfc7467ee7a3a0d10c9d5&language= es");return await e.json()}catch(e){console.log("Fetch Error: ",e)}})(),n=await(async()=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=24619fe1fc7bfc7467ee7a3a0d10c9d5&sort_by=vote_count.desc");return await e.json()}catch(e){console.log("Fetch Error: ",e)}})();return`\n        <div class="movies">\n            <article class="trending-movies">\n                <section class="section-title">\n                    <h2>Tendencias</h2>\n                </section>\n                <section class="section-movie">\n                    ${e.results.map((e=>`\n                        <div class="movie-item">\n                            <a href="#/${e.id}">\n                                <img src="https://image.tmdb.org/t/p/w500${e.backdrop_path}" alt=${e.original_title}>\n                                <h3>${e.original_title}</h3>\n                                <p>Reproducciones: ${e.popularity}</p>\n                                <p>Calificación: ${e.vote_average}</p>\n                            </a>\n                        </div>\n                       `)).join("")}\n                </section>\n            </article>\n            <article class="popularity-movies">\n                <section class="section-title">\n                    <h2>Más Popular </h2>\n                </section>\n                <section class="section-movie">\n                    ${n.results.map((e=>`\n                        <div class="movie-item">\n                            <a href="#/${e.id}">\n                                <img src="https://image.tmdb.org/t/p/w500${e.backdrop_path}" alt=${e.original_title}>\n                                <h3>${e.original_title}</h3>\n                                <p>Reproducciones: ${e.popularity}</p>\n                                <p>Calificación: ${e.vote_average}</p>\n                            </a>\n                        </div>\n                        `)).join("")}\n                </section>\n            </article>\n        </div>\n   `},"/:id":async()=>{const t=e(),i=await(async e=>{const t=e?`https://api.themoviedb.org/3/movie/{movie_id}${e}?api_key=24619fe1fc7bfc7467ee7a3a0d10c9d5&language= es`:n;try{const e=await fetch(t);return await e.json()}catch(e){console.log("Fetch Error: ",e)}})(t),a=await(async e=>{const n=`https://api.themoviedb.org/3/movie/{movie_id}${e}/credits?api_key=24619fe1fc7bfc7467ee7a3a0d10c9d5`;try{const e=await fetch(n);return await e.json()}catch(e){console.log("Fetch Error: ",e)}})(t);return`\n        <div class="movie-card">\n            <div class="movie-img">\n                <img class="poster-img" src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt="img">\n            </div>\n            <div class="movie-info">\n                <h2>${i.original_title}</h2>\n                <p>${i.overview}</p><br>\n                <h3>Año: </h3>\n                <p>${i.release_date}</p><br>\n                <h3>Duración: </h3>\n                <p>${i.runtime} min.</p><br>\n                <h3>Puntuación: </h3>\n                <p>${i.vote_average}</p><br>\n                <h3>Géneros: </h3>\n                <p>${i.genres.map((e=>`${e.name}`)).join(", ")}</p><br>\n                <h3>Reparto: </h3>\n                <p id="cast">${a.cast.map((e=>`${e.name}; `)).join(" ")}</p>\n            </div>\n        </div>\n    `}},i=async()=>{const i=document.getElementById("header"),a=document.getElementById("movie-grid");i.innerHTML='\n        <div class="header-main">\n            <div class="header-nav">\n                <h1>\n                    <a href="#/">MovieDV.com👁‍🗨 </a>\n                    <link href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap" rel="stylesheet">\n                   \n\n                </h1>\n            </div>\n        </div>\n\n     \n    \n    ';let o=e();console.log("Hash: ",o);let s=await(e=>e.length<=7?"/"===e?e:"/:id":`/${e}`)(o);console.log("Ruta: ",s);let c=t[s]?t[s]:n;a.innerHTML=await c()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();