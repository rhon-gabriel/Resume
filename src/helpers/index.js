import axios from "axios";

const corsHeroku = 'https://cors-anywhere.herokuapp.com'
const api = 'https://planthubtm.herokuapp.com'

export async function getSkills(setSkills) {
  const res = await axios.get(`${corsHeroku}/${api}/skills`)
    .then(res => setSkills(res.data))
    .catch(err => {
      console.log(err, 'err getSkills');
    });
    return res
}

export async function getExperiences(setExperience) {
  const res = await axios.get(`${corsHeroku}/${api}/experiences`)
    .then(res => setExperience(res.data))
    .catch(err => {
      console.log(err, 'err getSkills');
    });
    return res
}