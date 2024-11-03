const Index = (props) => {
  console.log(props.data); //!HACK: [1,2,3]
  return <>hehe</>;
};

export const getServerSideProps = async () => {
  //!HACK: API CALL HERE
  const data = [1, 2, 3];

  return {
    props: {
      data: data,
    },
  };
};
export default Index;
