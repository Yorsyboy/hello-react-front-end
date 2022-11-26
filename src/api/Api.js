const fetchGreetingData = async () => {
  const response = await fetch('http://localhost:3000/api/greetings');
  const data = await response.json();
  return data;
};

export default fetchGreetingData;
