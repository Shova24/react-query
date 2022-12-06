import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Heros() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/superheros")
        .then((res) => setData(res?.data));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      Heros
      <hr />
      {data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
}
