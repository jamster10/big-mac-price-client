import config from '../config';

export default  {
  async getData(country){
    const data = await fetch(`${config.API_ENDPOINT}${country}`)
    console.log(data)
    if (!data.ok){
      console.log('in here')
      return Promise.reject(data.json());
    }
    let x= await data.json();
    console.log('here')
    console.log(x)
    return x
  }
}