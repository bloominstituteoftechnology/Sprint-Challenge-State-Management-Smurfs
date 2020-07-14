//5.
import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

const FetchMe = ({ fetchData, error, quotes, isFetching }) => {
  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Data: {JSON.stringify(quotes)}</h2>
      <button onClick={fetchData}>Get Data</button>
      {}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
    quotes: state.quotes,
  };
};

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(FetchMe);
