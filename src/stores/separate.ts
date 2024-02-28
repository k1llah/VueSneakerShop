import { ref } from "vue";
import axios from "axios";
const onClickOnGender = ref("");
const mansRoute = async () => {
  if (onClickOnGender.value == "man") {
    const response = await axios.get("http://localhost:3001/api/manSneakers");
    const data = response.data;
  } else {
    const response = await axios.get("http://localhost:3001/api/womanSneakers");
    const data = response.data;
  }
};
