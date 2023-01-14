import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Sidebarlayout = styled.div`
height: 100%;
width: 228px;
position: fixed;
z-index: 1;
padding-top: 0px;
left: 0;

overflow-x: hidden;
color: #ffffff;
`;

export const SideBarLink = styled(Link)`
// color: #808080;
color: #ffffff;
display: flex;
align-items: top;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	background-color: #111;
}
&:hover {
	transition: all 0.1s ease-in-out;
	background: #2b2e36;
	color: #808080;
}
`;