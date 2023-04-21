import MainLayout from "@/components/layouts/main";
import React, { useState } from "react";

export default function AboutPage() {
  const [number, setNumber] = useState(0);
  const IncreaseNumber = () => {
    setNumber((number) => {
      return number + 1;
    });
    console.log(number);
  };
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={IncreaseNumber}>Increase</button>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
