import config from '../config';

export default  {
  async getData(country){
    const data = await fetch(`${config.API_ENDPOINT}${country}`)
    if (!data.ok){
      return Promise.reject(data.json());
    }
    return await data.json();
  }
}