import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSmurfs} from '../store/actions/index.js';
import { Card } from 'semantic-ui-react';


const Village = ({getSmurfs, smurfs}) => {

  useEffect(() => {
    getSmurfs();
  },[getSmurfs]);

  console.log(smurfs)

  return(

    <div className='card'>
      {smurfs.map(smurf => {
        return(
        <Card key={smurf.id}>
          <Card.Content>
            <Card.Header>{smurf.name}</Card.Header>
            <Card.Meta>{smurf.age}</Card.Meta>
            <Card.Description>
            {smurf.height}
            </Card.Description>
          </Card.Content>

        </Card>
        ) 
      })}

    </div>
  )
}


const mapStateToProps = state => {

  return {
    smurfs: state.smurfs
  }

}


export default connect(mapStateToProps, {getSmurfs})(Village);