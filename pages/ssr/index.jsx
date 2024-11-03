import React from "react";

const Index = (props) => {
  return <div>{props.data}</div>;
};

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:4000/api");
  // const data = await res.json();
  const data=1
  console.log("Hello from ssr page")
  return {
    props: {
      data: data,
    },
  };
}
export default Index;
