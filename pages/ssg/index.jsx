import React from "react";

const Index = (props) => {
  return <div>SSG PAGE</div>;
};

export async function getStaticProps() {
  console.log("hello from ssg");
  // NOTE: Data fetched from api
  return {
    props: {
      data: 1,
    },
    revalidate: 10,
  };
}
export default Index;
