import {useState} from 'react';


function App() {
  const [form, setForm] = useState({
    name: '',
    surname:'',
    email: '',
    date: '',
  });

function handleInput(e){
  setForm({...form,[e.target.name]:e.target.value})
}


  async function handleSubmit(e){
    e.preventDefault();
    const res= await fetch("http://localhost:4000/registration", {
      method: 'POST',
      body: form,
    });
    console.log(res);
  }


  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input 
      type ='text' 
      name='name'
      value={form.name} 
      onChange={handleInput} 
      placeholder="Enter name"
      />
      <input 
      type ='text' 
      name='surname' 
      value={form.surname} 
      onChange={handleInput} 
      placeholder="Enter surname"/>
      <input 
      type ='email'  
      name='email' 
      value={form.email} 
      onChange={handleInput} 
      placeholder="Enter email"/>
      <input 
      type ='date'  
      name='date'
      value={form.date} 
      onChange={handleInput} />
      <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
