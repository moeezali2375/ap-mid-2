import React, { useEffect, useState } from "react";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("This runs after a 2-second delay");

  // Fetch data after the delay
  const response = await fetch("http://localhost:4000/events");
  const responseData = await response.json();
  return responseData;
};

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responseData = await getData(); // Await the data
      setData(responseData.events); // Set the data after it's fetched
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading....</p>;
  return (
    <>
      <h1>CSR</h1>
      {data && data.map((d) => <p key={d.id}>{d.title}</p>)}
    </>
  );
};

export default Index;
