import Error404 from "../pages/Error404";

const apiKey = '24619fe1fc7bfc7467ee7a3a0d10c9d5';
const apiMovie = 'https://api.themoviedb.org/3/movie/{movie_id}';

const getMovie = async (id) => {
    const apiURL = id ? `${apiMovie}${id}?api_key=${apiKey}&language= es` : Error404;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getMovie;