import { ref } from "vue";
import axios from "axios";

const genderRoute = async (gender:string) => {
  
    const response = await axios.get("http://localhost:3001/api/Sneakers/"+gender);
    const data = response.data;
		console.log(data)
  
}

// http://localhost:3001/api/Sneakers/:gender