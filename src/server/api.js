const axios = require('axios').default;
const KEY = '8478375b0b2eb45c66ac10717e1ab9a2';
const URL = 'https://api.themoviedb.org/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default class Server {
  constructor() {
    this.name = '';
    this.page = 1;
    this.movieId = '';
  }
  async serverHitsList() {
    const serverDataURL = `${URL}3/trending/movie/day?api_key=${KEY}&page=${this.page}&language=uk-UA`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async serverSearch() {
    const serverDataURL = `${URL}3/search/movie?api_key=${KEY}&language=uk-UA&query=${this.name}&page=${this.page}&include_adult=false`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async serverMovie() {
    const serverDataURL = `${URL}3/movie/${this.movieId}?api_key=${KEY}&language=uk-UA`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async serverActors() {
    const serverDataURL = `${URL}3/movie/${this.movieId}/credits?api_key=${KEY}&language=uk-UA`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async serverResponse() {
    const serverDataURL = `${URL}3/movie/${this.movieId}/reviews?api_key=${KEY}&language=uk-UA&page=${this.page}`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async serverResponseUS() {
    const serverDataURL = `${URL}3/movie/${this.movieId}/reviews?api_key=${KEY}&language=en-US&page=${this.page}`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
