import axios from "axios";


const fetchData = async () => {
    try {
      const res=await axios.get("http://127.0.0.1:8000/api/courses");
        
       return res.data;
        
    } catch (error) {
        throw error;
       
   }

    // try{
    //     const res=await fetch("http://127.0.0.1:8000/api/courses");
    //     const data=await res.json();
      
    //     return data;

    // }catch(error){
    //     throw error;
    // }
  };
  
  export default fetchData;
