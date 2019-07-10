import axios from "axios";

export async function fetchData(setPlants) {
  const res = await fetch("/api/v1/plants");
  res
    .json()
    .then(res => setPlants(res.plant))
    .catch(error => {
      console.log(error);
    });
}

export async function addNewPlant(
  plant,
  name,
  watering,
  link,
  body,
  category_id
) {
  axios
    .post("/api/v1/plants", { name, watering, link, body, category_id })
    .then(response => {
      const plants = [...plant, response.data];
      this.setPlants(plants);
    })
    .catch(error => {
      console.log(error);
    });
}
