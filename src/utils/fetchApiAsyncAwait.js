const fetchApiAsyncAwait = async (apiUrl, request) => {
  const response = await fetch(apiUrl, request);
  const data = await response.json();
  return data;
};

export default fetchApiAsyncAwait;
