export const date = (ms: number) => {
  const date = new Date(ms);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const DD = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  const MM = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const YYYY = date.getFullYear();
  return `${hours}:${minutes} ${DD}-${MM}-${YYYY}`;
};
