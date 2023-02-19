import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isLodding, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadiingMsg = <p>todos is loading</p>;
  const errormsg = <p>{error}</p>;

  const DataElement =
    data &&
    data.map((dt) => {
      return <p key={dt.id}>{dt.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && errormsg}
      {isLodding && loadiingMsg}
      {DataElement}
    </div>
  );
};

export default DataFetch;
