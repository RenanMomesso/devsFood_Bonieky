import styled from 'styled-components'

export const Container = styled.div`
background-color:#136713;
border-radius:10px;
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const Logo = styled.img`
height:70px;
width:auto;
`;

export const SearchInput = styled.input`
border:0;
outline:0;
width:${props=>props.active ? '250px' : '0px'};
height:50px;
border-radius:25px;
background-color:#FFFFFF;
background-image:url('/assets/search.png');
background-size:30px;
background-repeat:no-repeat;
background-position:10px center;
padding-left:50px;
cursor:pointer;
font-size:15px;
transition:all ease 0.4s;
&:focus{
    cursor:text;
}
`;