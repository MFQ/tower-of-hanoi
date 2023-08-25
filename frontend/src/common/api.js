import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL;

const generate_steps = number_of_pegs => 
  axios.post(`${baseUrl}/generate-steps`, {number_of_pegs})

export { generate_steps };