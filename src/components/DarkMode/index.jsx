import { BsMoonFill } from "react-icons/bs";
import './DarkMode.scss'
function DarkMode() {
  const handleDarkMode = (e)=>{
    document.body.classList.toggle("darkMode")
  }
  return (
    <div onClick={handleDarkMode}>
      <BsMoonFill className='dark_icon'></BsMoonFill>
    </div>
  );
}

export default DarkMode;
