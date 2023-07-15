import "./Header.css";
import { BsFillCloudSunFill,BsFillCloudMoonFill } from "react-icons/bs";
export default function Header(props){
    const {theme,setTheme} = props;
    function ToggleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Mangement</span>
            </div>
            <div className="theme-container">
                {/* <span>{theme === "light"?<BsFillCloudSunFill />:<BsFillCloudMoonFill/>}</span> */}
                <span className="icon" onClick={ToggleTheme}>{theme === "light"?<BsFillCloudSunFill />:<BsFillCloudMoonFill/>}</span>
                
            </div>
        </header>
    )
}