import React, {useState} from 'react';
import {connect} from 'react-redux';


const SmurfList = props =>{
    const[counter, setCounter] = useState(0);

    console.log("list length",(props.smurflist.length - 1));
    
    const nextHandler = () =>{
        if(counter === props.smurflist.length - 1){
            return setCounter(0);
        }
        else{
            return setCounter(counter + 1);
        }
        
    }
    const backHandler = () =>{
        if(counter < 1){
            return setCounter(props.smurflist.length - 1);
        }

        else{
            return setCounter(counter - 1);
        }
        
    }

    console.log("counter",counter);

    return(
    <div>{props.smurflist.map((list, index) => {
        if(counter === index){
            return(        
            <div className = "Movie-Box" key = {list.id}>
            <h1>{list.title}</h1>
            <div className="info">
                <p>Name: {list.name}</p>
                <p>Age: {list.age}</p>
                <p>Height: {list.height}</p>
            </div>
            <button onClick ={backHandler}>Back</button>
            <button onClick ={nextHandler}>Next</button>
            </div>
        )
        }
        
    })}</div>
    )
};

const mapStateToProps = state => {
    return {
        smurflist: state.smurfList
    }
}

export default connect(
    mapStateToProps,
    {}
)(SmurfList);