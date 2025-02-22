import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataItemType } from "@/@types";

interface HeadCell {
  id: keyof DataItemType | "action";
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "title",
    label: "تیتر",
  },
  {
    id: "lead",
    label: "خلاصه",
  },
  // {
  //   id: "content",
  //   label: "وضعیت",
  // },
  {
    id: "action",
    label: "عملیات",
  },
];

const ListHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="right">
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListHead;
