export const fetchData = async (url) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
  const jsonData = await response.json();
  return jsonData;
};
