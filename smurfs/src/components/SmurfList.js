import React, {useContext} from 'react';
import SmurfContext from '../context.js/SmurfContext';
import SmurfCard from '../components/SmurfCard';


const SmurfList = () =>{

const {data} = useContext(SmurfContext);
// console.log(data)
    return(
        <div>
            {data.map(item => (
                <SmurfCard/>
            ))}
        </div>
    );
};

export default SmurfList;