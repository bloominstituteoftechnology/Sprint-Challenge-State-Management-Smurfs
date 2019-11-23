import React from 'react'
import rootReducer from '../reducers/index'
import {connect} from 'react-redux';
import {updateSmurf, deleteSmurf} from '../actions/index'
// import {postSmurfs} from '../actions/index'
import {fetchSmurfs} from '../actions/index';

 
class Smurfs extends React.Component{
    componentDidMount(){
        this.props.fetchSmurfs()
        // this.props.addSmurfs();
        // this.props.postSmurf();
    }

    



     render(){
         console.log(reducer)
        console.log('this.props',this.props.smurfs)
         return (
            <div>
             <h2>SMURFS!!</h2>
             {this.props.smurfs.map (smurf => {
                 
                 return (
                     <div className='smurfs' key={smurf.id}>
                         <h2>{smurf.name}</h2>
                         <p>age :{smurf.age}</p>
                         <p> height:{smurf.height}</p>
                         <button className='deleteButton' onClick =  {console.log('HAY',smurf.id),()=> this.props.deleteSmurf(smurf.id)}
                             
                         > DELETE</button> 
                         <button className ='update'onClick = {()=>{this.props.updateSmurf(smurf.id)}}>Update</button>
 


                         </div>
                 )
             })}


            </div>
        )
    }
 

 
 }
 const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect (
    mapStateToProps,
    {fetchSmurfs, deleteSmurf,updateSmurf},  
)(Smurfs)
 