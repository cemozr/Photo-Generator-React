import axios from "axios";
const SearchImages = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=0BxQcD_q_4wT6zERIfuYK3K5a6KQyASFD9FxwiQA7nQ",
    {
      params: {
        query: term,
      },
    }
  );

  return response.data.results;
};

export default SearchImages;
