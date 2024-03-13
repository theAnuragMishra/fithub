"use client";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Badge from "@mui/material/Badge";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface HighlightedDays {
  [monthYear: string]: number[];
}

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: HighlightedDays }
) {
  const { highlightedDays = {}, day, outsideCurrentMonth, ...other } = props;

  const monthYearKey = day.format("MM-YYYY");
  const highlightedDaysForMonth = highlightedDays[monthYearKey] || [];

  const isSelected =
    !outsideCurrentMonth && highlightedDaysForMonth.includes(day.date());

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "✅" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function Calendar() {
  let isLoading;
  const initialValue = dayjs();

  // Highlighted days for different months
  const highlightedDays: HighlightedDays = {
    "03-2024": [4, 5], // March 2024
    "04-2024": [10, 15], // April 2024
    // Add more month-year keys as needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}
