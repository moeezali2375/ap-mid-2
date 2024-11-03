import React from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.events);
      return res.events;
    });

const Index = () => {
  // Use SWR to fetch data
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/events",
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>CSR using SWR</h1>
      {data.map((event) => (
        <p key={event.id}>{event.title}</p>
      ))}
    </div>
  );
};

export default Index;
