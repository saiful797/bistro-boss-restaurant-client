import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:8000/menu')
        .then(res => {
            const data = res.data;
            setMenu(data);
            setLoading(false);
        })
    },[])

    return [menu, loading];
}

export default useMenu;