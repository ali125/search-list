import React from "react";
import SearchBar from "./SearchBar";
import DateFilter from "./DateFilter";
import Section from "../Section";

const Filter = () => {
  return (
    <Section className="w-[25rem]">
      <SearchBar />
      <DateFilter />
    </Section>
  );
};

export default Filter;
