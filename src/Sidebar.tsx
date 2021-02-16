import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  
function Sidebar() {
    return(
                
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FontAwesomeIcon icon="home" />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FontAwesomeIcon icon="heart" />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
       
    )
}

export default Sidebar;