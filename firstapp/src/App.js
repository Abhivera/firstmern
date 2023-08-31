import {useState} from "react";
import axios from "axios";

function App() {
const [form,setForm] = useState({});
const handleChange = (event) =>{
setForm({...form,[event.target.name]:event.target.value,});
console.log(form);
}
const handleSubmit = async  (e) => {
  
  e.preventDefault();
 await  axios.post("http://localhost:8080/abhi",form).then((response)=>{console.log(response.data)});

 
};  
return (
   <form onSubmit={handleSubmit}>
    <div>{JSON.stringify(form)}</div>
    <span>Hello</span>
    <input type="text" name="myname" onChange={handleChange}/>
    <span>Bye</span>
    <input type="text" name="mypassword" onChange={handleChange}/>
    <input type="submit"/>
   </form>
  )
}

export default App
