import { Sidebarlayout,SideBarLink } from "./FixedSideBarElements";
import { NavLink as Link } from 'react-router-dom';
import ClippedDrawer from "./Fixedsidebar";

const Sidebar = () => {
    return (
        <ClippedDrawer></ClippedDrawer>
    // <Sidebarlayout>
    //     <SideBarLink>
    //         <div >Dashboard</div>
    //     </SideBarLink>
    // </Sidebarlayout>
    );
};

export default Sidebar;