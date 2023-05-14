import {useEffect, useState} from 'react';
import  '../../index.css'
import {Link} from 'react-router-dom'


const InitialForm = {
  name: '',
    surname:'',
    email: '',
    date: '',
};

function App() {
  const [form, setForm] = useState(InitialForm);

const [registrations, setRegistrations] = useState([]);



  useEffect(()=>{
    fetchRegistrations();
  },[]);

  async function fetchRegistrations() {
    const res = await fetch ('http://localhost:4000/registration')
    const {data} = await res.json();
    setRegistrations(data);
  }

function handleInput(e){
  setForm({...form,[e.target.name]:e.target.value})
}


  async function handleSubmit(e){
    e.preventDefault();
    const res= await fetch("http://localhost:4000/registration", {
      method: 'POST',
      body: JSON.stringify(form),
      headers:{
        'content-type': "application/json",
      }
    });
    if (res.ok) {
      setForm(InitialForm);
      fetchRegistrations();
    }
    
  }

async function remove(_id) {
  if (!window.confirm("Are you sure?")) return;
  const res = await fetch(`http://localhost:4000/registration/${_id}`,{
    method: 'DELETE',
  });
  if(res.ok){
    fetchRegistrations();
    window.alert('Deleted Successfully');
  }
}

async function update(_id) {
  if (!window.confirm("Are you sure?")) return;
  const res = await fetch(`http://localhost:4000/registration/${_id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });
  if(res.ok){
    fetchRegistrations();
    window.alert('Updated Successfully');
  }
}



  return (
    <div>
      <Link to="/"><button>Logout</button></Link>
      <h1>Beauty saloon/Client registration system</h1>
      <h2>Add new client</h2>
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
      type ='datetime-local'  
      name='date'
      value={form.date} 
      onChange={handleInput} />
      <button type="submit">Submit</button>
     </form>
<br/>

<section>
  <table>
    <thead>
    <th>Name</th>
    <th>Surname</th>
    <th>Email</th>
    <th>Date</th>
    </thead>
    <tbody>
    {registrations.map((rgs) => (
  <tr key={rgs._id}>
    <td>{rgs.name}</td>
    <td>{rgs.surname}</td>
    <td>{rgs.email}</td>
    <td>{new Date(rgs.date).toLocaleString()}</td>
    <td>
      <button onClick={() => remove(rgs._id)}>Delete</button>
      <button onClick={() => update(rgs._id)}>Update</button>
    </td>
  </tr>
))}
      
    </tbody>
  </table>
</section>

    </div>
  );
}

export default App;
