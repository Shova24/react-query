import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function RQ() {
  //unique key to determine the query
  //second argument takes a promise function
  const {
    data: rq,
    isLoading,
    error,
    isError,
  } = useQuery("super-heros", () => {
    return axios.get("http://localhost:5000/superheros");
  });
  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1>RQ superHeros </h1>
      <hr />
      {rq?.data.map((el) => (
        <h5 key={el.id}>{el?.name}</h5>
      ))}
    </>
  );
}
