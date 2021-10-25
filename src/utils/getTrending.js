const apiKey = '24619fe1fc7bfc7467ee7a3a0d10c9d5';
const apiTrending = 'https://api.themoviedb.org/3/trending/movie/week'; //aca modifique

const getTrending = async () => {
    const apiURL = `${apiTrending}?api_key=${apiKey}&language= es`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getTrending;