import { useState } from "react";
import axios from 'axios';
function App() {
  const [form, setForm] = useState();
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/demo",form);
    const data = res.data;
    console.log(data);
    

    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{JSON.stringify(form)}</p>
        <span>Your Name</span>
        <input type="text" name="myname" onChange={handleChange} />
        <span>Your Password</span>
        <input type="text" name="mypassword" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
