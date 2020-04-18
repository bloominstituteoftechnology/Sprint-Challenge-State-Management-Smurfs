import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { editData } from "../actions";

const Container = styled.div`
    height: 200px;
    width: 150px;
    border-radius: 10px;
    border: 5px solid ${props => props.isEdit ? "green" : "dodgerblue"};
`

const Card = (props) => {
    const { id, name, age, height } = props.data;
    const handleOnClick = () => {
        if (props.edit && (props.edit.id === id)) {
            props.editData(undefined)
            return
        }
        props.editData(props.data)
    }

    return (
        <Container isEdit={props.edit && props.edit.id === id} onClick={() => handleOnClick()}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </Container>
    )
}

const mapStateToProps = state => ({
    edit: state.edit
})

export default connect(mapStateToProps, { editData })(Card);