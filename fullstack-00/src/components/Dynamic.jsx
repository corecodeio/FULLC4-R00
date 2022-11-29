import React,{useState, useEffect } from 'react'
import Portal from './Portal';

const Dynamic = () => {
    const [list,setList] = useState([]);
    const [portal, setPotal] = useState(false);
    const [url,setUrl] = useState('');
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const callList = async()=>{
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const responseJson = await response.json();
        console.log(responseJson);
        setList(responseJson.data);
        setTotalPages(responseJson.total_pages);
    };
    useEffect(()=>{
        callList();
    },[page]);
    useEffect(()=>{
        console.log('cambio');
    });
    useEffect(()=>{
        console.log('crear');
    },[]);
    useEffect(()=>{
        console.log('cambio url');
    },[url]);
    const back =()=>{
        setPage( page - 1);
    };
    const next =()=>{
        setPage( page + 1);
    };
    const handleInput = (e)=>{
        setInput(e.target.value);
    }
  return (
    <>
    {portal && <Portal close={setPotal}>
        <img src={url} alt="avatar"/>
    </Portal>}
    <input name='name' value={input} onChange={handleInput} />
    <button onClick={back} disabled={page<=1}>back</button>
    <button onClick={next} disabled={page>=totalPages}>next</button>
    <p>{`${page} / ${totalPages}`}</p>
    {list.filter((item)=> input ? item.first_name===input : true).map((item,index)=>{
        const openPortal = ()=>{
            setUrl(item.avatar);
            setPotal(true);
        };
        return <div key={`list-${index}`}>
            <p>{item.email}</p>
            <img onClick={openPortal} src={item.avatar} alt="avatar"/>
            <p>{item.first_name}</p>
            <p>{item.last_name}</p>
        </div>
    })}
    </>
  )
}

export default Dynamic