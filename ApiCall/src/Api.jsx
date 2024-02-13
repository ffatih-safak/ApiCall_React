import axios from 'axios'; // Add this line to import axios

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID diBkm8NMtj4sDt_FDjc_E3MUyGXfObYtDDzHn5nxsQ4',
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  }; 

  export default searchImages;