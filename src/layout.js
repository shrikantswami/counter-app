import styled from 'styled-components';

export const Maincontent = styled.div`
padding-top: 55px ;
margin-left: 220px;
// background: #ffffff;
// background: #24292f;
// height: 48px;
// display: flex;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// position: fixed;
// box-shadow: 0 1px 5px 0 rgb(41 85 115 / 21%);
// width:100%;
/* z-index: 15;*/
/* Third Nav */
/* justify-content: flex-start; */
`;

export const List = styled.div`
padding: 20px ;
margin-right: 220px;
// background: #24292f;
// height: 48px;
// display: flex;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// position: left;
// box-shadow: 0 1px 5px 0 rgb(41 85 115 / 21%);
// width:100%;
/* z-index: 15;*/
/* Third Nav */
/* justify-content: flex-start; */
`;

export const SearchBar = styled.input`
padding: 10px ;
border : transparent;
margin-left:15px;
// margin-right: 220px;
// background: #ffffff;
// background: #24292f;
// height: 48px;
display: flex;
// border-radius: 20px;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
// position: fixed;
// box-shadow: 0 1px 5px 0 rgb(41 85 115 / 21%);
width:85%;
/* z-index: 15;*/
/* Third Nav */
/* justify-content: flex-start; */
`;

export const Cbox = styled.input.attrs(
    {type:"checkbox"}
)`

`;

export const SearchBoxContainer = styled.div`
display: flex;
border-radius: 20px;
box-shadow:0 3px 10px rgb(0 0 0 / 0.2);
margin:10px;
`;

export const SearchButton = styled.button`
// border-radius-right: 20px;
border : transparent;
background: white;
align:left;

`;