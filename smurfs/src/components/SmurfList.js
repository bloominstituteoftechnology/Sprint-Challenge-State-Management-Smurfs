import React, {useEffect,useState} from "react"
import {connect} from "react-redux"
import {fetchData,addSmurf} from "../Actions/app"


//COMPONENTS

import {Smurf} from "./Smurf"

/**DATA SHAPE
 *
 *  [
 *      {
 *          "name":"Brainey",
 *          "age":200,
 *          "height":"5cm",
 *          "id":0
 *      }
 *  ]
  
 */

 
 export const SmurfList = props => {
     
     useEffect(()=>{
         props.fetchData()
     },[])
     
     const [fields,setFields] = useState({
        name:"",
        age:"",
        height:""  
      })
      
      const changeHandler = (e)=>{
          setFields({
              ...fields,
              [e.target.name]:e.target.value
          })
      }
      const handleSubmit = (e)=>{
          e.preventDefault()
          props.addSmurf(fields)
          setFields({
              name:"",
              age:"",
              height:""
          })
      }
    console.log("SMURFLIST PROPS.DATA", props.smurfs.data)
     return(
         <div className = "smurf-list">
              {props.isLoading ?(
                <div>Retrieving Information</div>
            ):(
                <div>
                 <div>
            <form>
             <label> ADD A Smurf
                 <input
                 name = "name"
                 onChange = {changeHandler}
                 type = "text"
                 value = {fields.name}
                 placeholder="Name"
                 />
                   <input
                 name = "age"
                 onChange = {changeHandler}
                 type = "text"
                 value = {fields.age}
                 placeholder="Age"
                 />
                   <input
                 name = "height"
                 onChange = {changeHandler}
                 type = "text"
                 value = {fields.height}
                 placeholder="Height"
                 />
                 <button type='submit' onClick={handleSubmit}>ADDSMURF</button>
             </label>
            </form>
        </div>   
             
             {props.smurfs.data.map(smurfs=>{
                 return(
                     <Smurf data = {smurfs} key = {smurfs.id}/>
                 )
             })}
             
             </div>
             )}
         </div>
     )
 }

 const mapStateToProps = state =>{
     return{
         smurfs:state.smurfs,
         isLoading:state.isLoading,
         error:state.error
     }
 }
 
 export default connect(
     mapStateToProps,
     {fetchData,addSmurf}
 )(SmurfList)

 