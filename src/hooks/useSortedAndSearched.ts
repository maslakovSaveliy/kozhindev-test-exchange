import { useMemo } from "react";
import { IRow } from "../models/IRow";
import { course } from "../utils/course";
import { CODES } from "../utils/valuteCodes";
import { useAppSelector } from "./redux";

export const useSorted = (rows: IRow[], sortMethod: string) => {
  const { currencies } = useAppSelector((state) => state);
  const sorted = useMemo(() => {
    if (sortMethod === "code")
      return rows.sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
    if (sortMethod === "name")
      return rows.sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
    if (sortMethod === "rubCourse")
      return rows.sort((a, b) => Number(b.rubCourse) - Number(a.rubCourse));
    if (sortMethod === "usdCourse")
      return rows.sort(
        (a, b) =>
          Number(course(Number(b.rubCourse), CODES.USD, currencies)) -
          Number(course(Number(a.rubCourse), CODES.USD, currencies))
      );
    if (sortMethod === "eurCourse")
      return rows.sort(
        (a, b) =>
          Number(course(Number(b.rubCourse), CODES.EUR, currencies)) -
          Number(course(Number(a.rubCourse), CODES.EUR, currencies))
      );
    return rows;
  }, [sortMethod, rows]);
  return sorted;
};

export const useSortedAndSearched = (
  rows: IRow[],
  sortMethod: string,
  query: string,
  limit: boolean
) => {
  const sorted = useSorted(rows, sortMethod);

  const searchAndSorted = useMemo(() => {
    return sorted.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sorted, sortMethod]);
  const res = searchAndSorted.filter((item) => item.code !== CODES.RUB);
  if (limit) {
    return res.filter((item, index) => index <= 9);
  }
  return res;
};
