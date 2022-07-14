const axios = require('axios').default;
const KEY = '8478375b0b2eb45c66ac10717e1ab9a2';
const URL = 'https://api.themoviedb.org/';

export default class Server {
  constructor() {
    this.name = '';
    this.page = 1;
  }
  async serverData() {
    const serverDataURL = `${URL}3/trending/movie/day?api_key=${KEY}&language=uk-UA'`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;
      return data;
    } catch (error) {}
  }
}
