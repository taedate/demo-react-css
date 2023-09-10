import ig from "../assets/icons/instagram.png";
import logo from "../assets/icons/userd.png";
import face from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";


function Navbar (){

    return(
        <div className="flex justify-between items-center px-2 bg-slate-500 h-[10%]">
            <img src= {logo} alt="userd" width ={50}px className="cursor-pointer"/>
            <ul className="hidden md:flex" >
                <li className="px-2"><a href="/"><img src= {ig} alt="ig" width={50}px/></a></li>
                <li className="px-2"><a href="/"><img src= {face} alt="face" width={50}px/></a></li>
                <li className="px-2"><a href="/"><img src= {twitter} alt="twitter" width={50}px/></a></li>
            </ul>
        </div>
    );
    }
    
export default Navbar;