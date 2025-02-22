"use client";
import Filter from "@/components/Filter";
import List from "@/components/List";

const Home = () => {
  return (
    <main className="flex items-stretch gap-8 h-screen p-8">
      <Filter />
      <List />
    </main>
  );
};

export default Home;
