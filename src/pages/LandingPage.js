import boy from "../assets/icons/boy.png";
import {useNavigate} from "react-router-dom";


function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    }
    return (
        <div className="text-center font-mono">
            <p className="text-5xl font-bold my-10"> ABOUT ME</p>
            <div className="flex justify-center">
                <img src={boy} alt="boy" px className="cursor-pointer my-10 w-[20%] shadow-lg shadow-indigo-500/40 " />
            </div>
            <p className="text-md mt-2 font-bold text-white mx-8 md:mx-36"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />
            <button className="text-[#ffff] underline]" onClick={() => handleToDetail()} >NEXT</button>
        </div>
        
    );
}

export default LandingPage;