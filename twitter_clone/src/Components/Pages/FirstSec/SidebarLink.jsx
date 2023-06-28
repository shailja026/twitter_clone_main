

import "./SidebarLink.css";
import {GrTwitter} from "react-icons/gr"
function SidebarLink({ text, Icon }) {
    return(
      <>
    
      <div className="link">
          <Icon className = "icon"/>
          <h2>{text}</h2>
      </div>
      </>
    );
  }
export default SidebarLink;