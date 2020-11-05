import axios from 'axios';

export async function getSearch(query) {
  try {
    const urlBase = 'http://localhost:8080/api/search'
    const url = `${urlBase}/${query}`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getRecipe(id) {
    try {
      const urlBase = 'http://localhost:8080/api/recipe'
      const url = `${urlBase}/${id}`;
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return err;
    }
  }
