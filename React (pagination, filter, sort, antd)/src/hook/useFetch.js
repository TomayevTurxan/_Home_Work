import { useEffect, useState } from "react"

const useFetch = function(url) {
    let[data,setData] = useState([]);
    let[loading,setLoading] = useState(true);
    let[error,setError] = useState({});

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if (!res.ok) {
                throw new Error('data failed!')
            }
            return res.json();
        }).then((data)=>{
            setData(data);
        }).catch((err)=>setError(err)).finally(()=>{
            setLoading(false);
        })
    },[url]);

    return{data,loading,error};
}

export default useFetch;