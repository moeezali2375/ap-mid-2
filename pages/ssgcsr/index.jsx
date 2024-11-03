import React, { useEffect ,useState} from "react";

const getData = async () => {
  // const res = await fetch("http://localhost:4000/api");
  // const data = await res.json();
  const data=[1,2,3]
  return data;
};

const Index = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    const newData = getData();
    //! WARNING: Check if newData is actually new than Server Data
    setData(newData);
  }, []);

  return <div>{data}</div>;
};

export async function getStaticProps() {
  const newData =await getData();
  return {
    props: {
      data: newData,
    },
  };
}

export default Index;
