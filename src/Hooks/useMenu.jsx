import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () =>{
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     axios.get('http://localhost:8000/menu')
    //     .then(res => {
    //         const data = res.data;
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])

    const {data: menu = [], refetch, isPending: loading} = useQuery({
        queryKey: [ 'menu' ],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [ menu, loading, refetch ];
}

export default useMenu;