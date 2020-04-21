import axios from "axios";

const corsHeroku = 'https://cors-anywhere.herokuapp.com'
const api = 'https://planthubtm.herokuapp.com'

export async function getPlants(setPlants) {
  const res = await axios.get(`${corsHeroku}/${api}/plants`)
    .then(res => setPlants(res.data))
    .catch(err => {
      console.log(err, 'err getPlants');
    });
    return res
}