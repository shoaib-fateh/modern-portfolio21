"use client";

import Hero from "@/components/Hero";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Page;
