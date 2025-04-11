import {useNavigate} from "react-router-dom";

const Profile: React.FC = () =>{
    const navigate = useNavigate();
    const navigateProfile = () =>{
        navigate("/user/ana");
    }
    return(
        <div>
            <h1>Componenten Profile</h1>
            <button onClick={()=>{navigateProfile()}}>User</button>
        </div>
    )
}
export default Profile;