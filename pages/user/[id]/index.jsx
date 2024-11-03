import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  console.log(router.query.id);

  const handleSubmit=(e)=>{
//! NOTE: API CALL 
    e.preventDefault();
    console.log("Api called")
    router.push("/shop")
  }
  return (
    <div>
      <Link href={"/shop"}>Shop page</Link>
      <form>
        <input type="text" />
	<button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Index;
