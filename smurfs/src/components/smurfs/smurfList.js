import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { getSmurfs } from "../../actions";
import SmurfCard from "./smurfCard";

import styled from "styled-components";

const CardListStyles = styled.div`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
  padding: 20px, 0px;
`;

class SmurfList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div>
          <h2>Added SMURFS!!</h2>
        <CardListStyles>
          {this.props.smurfs.data
            ? this.props.smurfs.data.map((smurf, i) => {
                return <SmurfCard smurf={smurf} key={i} />;
              })
            : null}
        </CardListStyles>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.reducer
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
