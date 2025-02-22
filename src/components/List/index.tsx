import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityIcon from "@mui/icons-material/Visibility";

import ListHead from "./ListHead";
import Section from "../Section";
import { DataItemType } from "@/@types";
import { filterData } from "@/helper/list.data";
import DetailModal from "../DetailModal";

const List: React.FC = () => {
  const [detailModal, setDetailModal] = useState<DataItemType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataItemType[]>([]);
  const searchParams = useSearchParams();

  const date = searchParams.get("date") || "";
  const search = searchParams.get("search") || "";

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await filterData({ search, date });
        setData(response);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [search, date]);

  const handleClose = useCallback(() => {
    setDetailModal(null);
  }, []);

  return (
    <>
      <Section className="w-full relative h-full">
        {isLoading && (
          <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/10 flex items-center justify-center">
            <CircularProgress />
          </div>
        )}
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <ListHead />
            <TableBody>
              {data.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      padding="none"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.lead}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => setDetailModal(row)}>
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {data.length === 0 && !isLoading && (
          <h2 className="text-2xl text-center text-red-900 font-semibold">
            داده ای یافت نشد!!
          </h2>
        )}
      </Section>
      <DetailModal
        data={detailModal}
        onClose={handleClose}
        isOpen={!!detailModal}
      />
    </>
  );
};

export default List;
