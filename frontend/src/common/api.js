import axios from "axios"

const generate_steps = number_of_pegs => 
  axios.post("http://127.0.0.1:5000/generate-steps", {number_of_pegs})

export { generate_steps };