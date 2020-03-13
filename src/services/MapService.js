const listMapData = async () => {
  const response = await fetch('https://secret-beach-58222.herokuapp.com/map-data');

  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  throw new Error(response.statusText);
};

export default listMapData;
