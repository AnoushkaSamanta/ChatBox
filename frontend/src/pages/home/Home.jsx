import React from "react";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return (
<div className="flex flex-row items-center justify-center min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] mx-auto p-4">
  <div className="w-full   p-6 sm:p-8 rounded-lg bg-gray-400/200 backdrop-blur-md border ">
  <SideBar/>
  </div>
</div>

  );
}

export default Home;
