import React from 'react';
import { Item, Segment, Label, Header } from 'semantic-ui-react';

const Smurf = (props) => {
    // console.log(props.sm.age)
    const {
        age,
        height,
        description,
        id,
        image,
        name
    } = props.sm

    return (
        <Item.Group>
            <Item>

                <Item.Image size='small' src={image} />
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Meta> 
                        <Label> Age: {age} </Label> 
                        <Label> Height: {height} </Label>
                    </Item.Meta>
                    <Header as='h4'>Description:</Header>
                    <Item.Description>
                        <Segment>
                            {description}
                        </Segment>
                    </Item.Description>
                </Item.Content>
                
            </Item>
        </Item.Group>
    );
};

export default Smurf;