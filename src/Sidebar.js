import {Button} from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";

function Sidebar(){
    return(<div className="sidebar">
        <Button startIcon={<AddIcon fontSize="large"  />}className="sidebar_compose" >
        compose
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
    </div>
    );

}
export default Sidebar;