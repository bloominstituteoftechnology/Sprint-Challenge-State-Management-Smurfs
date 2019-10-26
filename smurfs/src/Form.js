import React, {useState} from 'react'
import { updateSmurf} from './actions/smurfaction'
import { connect } from 'react-redux'


const Form = props => {
    const [newSmurf, setNewSmurf] = useState('')

    const handleChanges = e => {
        setNewSmurf(e.target.value);
      };
   
      const handleSubmit = e => {
        e.preventDefault();
        setNewSmurf('')
        props.UPDATE_SMURF(newSmurf || props.title)

      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="newSmurf"
                placeholder={props.title}
                value={newSmurf}
                onChange={handleChanges}
              />
              <button type="submit">Save</button>
            </form>
        
        </div>
    )

        }
function mapStateToProps(state) {
    return {
    smurf: state.title
    }
}

const mapDispatchToProps = {
  updateSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)