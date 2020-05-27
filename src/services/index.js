import axios from 'axios';


const apiUrl = 'http://localhost:4000';


const getForecasts = async () => {
    const res = await axios.get(`${apiUrl}/weather`)
    return res;
  }

const postLocations = async (locationArr = []) =>{
    const res = await axios.post(`${apiUrl}/weather`, locationArr)
    return res;
}

export {
    postLocations,
    getForecasts
}