import React, { useCallback, useEffect, useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "nextjs-toploader/app";
import { usePathname, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const debouncedSearchValue = useDebounce(searchText || "", 500);
  const date = searchParams.get("date");
  const searchTerm = searchParams.get("search");

  useEffect(() => {
    if (searchTerm) {
      setSearchText(searchTerm);
    }
  }, [searchTerm]);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearchText(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (text: string) => {
      if (searchText !== null) {
        const searchQuery: { [key: string]: string } = {
          search: text,
        };

        if (date) {
          searchQuery.date = date;
        }
        const query = new URLSearchParams(searchQuery);
        router.push(`${pathname}?${query}`);
      }
    },
    [date, searchText]
  );

  useEffect(() => {
    handleSubmit(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div>
      <FilledInput
        fullWidth
        placeholder="جستجو..."
        onChange={handleChange}
        size="medium"
        value={searchText || ""}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;
