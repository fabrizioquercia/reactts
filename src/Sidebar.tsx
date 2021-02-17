import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faHome, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

  
function Sidebar() {
    return(
                
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
      <Link to="/home"> Dashboard</Link>

    </MenuItem>
      <SubMenu title="Components" icon={<FontAwesomeIcon icon={faDatabase} />}>
      <MenuItem icon={<FontAwesomeIcon icon={faSpaceShuttle} />}>
          <Link to="/navicelle">Navicelle</Link>
      </MenuItem>
      <MenuItem icon={<FontAwesomeIcon icon={faDatabase} />}>
        <Link to="/missioni">Missioni</Link>
      </MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
       
    )
}

export default Sidebar;