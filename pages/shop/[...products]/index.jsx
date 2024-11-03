import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const path = router.query.products;
  console.log(path);
  if(!path)return <p>Loading...</p>
  return (
    <div>
      {path.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default Index;
