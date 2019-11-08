import React  from "react";
//,{ useState, useReducer }
import { connect } from 'react-redux';
import axios from 'axios';

import { getSmurfs} from '../store/actions';

//import { reducer } from "../store/reducers"

//import SmurfForm from "./SmurfForm";

// const SmurfList = (props) => {

//     const [state, dispatch] = useReducer(reducer);

//     const [newTitleText, setNewTitleText,] = useState("");
//     console.log(props)



    class SmurfList extends React.Component {

        constructor(props){
          super(props)
          console.log("smurfList constructor", props)
          this.state = {
            smurfsAdd: []
            

           // smurfs: smurfArray

          };
        }
      
      
           componentDidMount() {
               console.log(this.props)
             console.log("first render(mounting)");
            axios
            .get('http://localhost:3333/smurfs')
            .then(res => this.setState({  smurfsAdd: res.data }))
            //smurf: res.data <-- was this. works with smurfsAdd
            console.log(" component did mount");
            //.catch(err => console.log("error")); 
           }


//  if(fetchingSmurfs){
//     return <h2>fetching Smurf</h2>;
//  }

render() {
    console.log('state', this.state)
    return(

        <div>
            <h2>SMURF</h2>

            

         {this.state.smurfsAdd.map(smurf1 => {
           return (  
            
            <div className='smurfInfo'>
               
                {/* <h4 key={smurf1.id}/> */}
           <h3>NAME:{smurf1.name}</h3>
             <p>AGE:{smurf1.age}</p>
             <p>HEIGHT:{smurf1.height}</p> 
            

            </div>)
         } )}
            
        </div>
    )
}

        

    }


const mapStateToProps = state => {
    return{
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfList);

