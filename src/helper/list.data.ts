import { DataItemType } from "@/@types";
import data from "./sample-data.json";

type FilterData = (params: {
  search?: string;
  date?: string;
}) => Promise<DataItemType[]>;

export const filterData: FilterData = ({ search, date }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log({ search, date });
      console.log(data);
      const filtered = (data as DataItemType[]).filter((item) => {
        return (
          item.title.includes(search || "") &&
          item.published_at.includes(date || "")
        );
      });
      resolve(filtered);
    }, 2000);
  });
};
