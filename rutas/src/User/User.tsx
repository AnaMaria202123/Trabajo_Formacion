import {useParams , useNavigate } from "react-router-dom";

interface UserParams{
    name:string;
}
const User: React.FC=()=>{
    const navigate = useNavigate();
    const {name} = useParams <UserParams>();
    const Navegar = () =>{
        navigate("/profile");
    }
    
    
    return(
        <div>
            <h1>Page User {name}</h1>
            <button onClick={()=>{Navegar()}}>Profile</button>
        </div>
    )
}
export default User;