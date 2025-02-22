import React, { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CalendarProvider, Calendar } from "zaman";
import { useRouter } from "nextjs-toploader/app";
import { onDatePickerChangePayload } from "zaman/dist/types";

const DateFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const date = searchParams.get("date");
  const searchTerm = searchParams.get("search");

  const handleChange = useCallback(
    ({ value }: onDatePickerChangePayload) => {
      const d = new Date(value).toISOString();
      const dateValue = d.substring(0, d.indexOf("T"));

      const searchQuery: { [key: string]: string } = {
        date: dateValue,
      };

      if (searchTerm) {
        searchQuery.search = searchTerm;
      }
      const query = new URLSearchParams(searchQuery);
      router.push(`${pathname}?${query}`);
    },
    [pathname, router, searchTerm]
  );

  return (
    <div>
      <CalendarProvider locale="fa" round="x2">
        <Calendar
          defaultValue={date ? new Date(date) : undefined}
          onChange={handleChange}
          weekends={[6]}
        />
      </CalendarProvider>
    </div>
  );
};

export default DateFilter;
