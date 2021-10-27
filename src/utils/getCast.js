const apiKey = '24619fe1fc7bfc7467ee7a3a0d10c9d5';
const apiCast = 'https://api.themoviedb.org/3/movie/';

const getCast = async (id) => {
    const apiURL = `${apiCast}${id}/credits?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getCast;