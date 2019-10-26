import React from 'react'
import styled from 'styled-components';
function SmurfCard() {
    return (
        <CardStyles>
        <div className='header'>
            {/* <img src='' alt=''></img> */}
        </div>
        <div className='card-body'></div>
        </CardStyles>
            
    )
}

export default SmurfCard

const CardStyles = styled.div`
background: red;
height: 350px;
width: 250px;
.header{
height: 60%;
background: lightcoral;
}
.card-body{

}
`;