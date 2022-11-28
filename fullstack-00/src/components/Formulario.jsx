import React, { useState } from 'react';

const Formulario = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    /*
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [firstname, setFirstName]=useState('');
    const [lastname, setLastName]=useState('');
    const handleName = (e)=>{
        console.log(e.target.name)
        setName(e.target.value);
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handleFirst = (e)=>{
        setFirstName(e.target.value);
    };
    const handleLast = (e)=>{
        setLastName(e.target.value);
    };
    */
    const handleChange = (e) => {
        //setLastName(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>name:{data.name}</p>
                <input value={data.name} name='name' onChange={handleChange} placeholder='name...' />
                <p>email:</p>
                <input value={data.email} name='email' onChange={handleChange} placeholder='email...' />
                <p>first name:</p>
                <input value={data.first_name} name='first_name' onChange={handleChange} placeholder='first name...' />
                <p>last name:</p>
                <input value={data.last_name} name='last_name' onChange={handleChange} placeholder='last name...' />
                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    )
}

export default Formulario