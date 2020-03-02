const FetchPerson = async () => {

  const response = await fetch('https://my-json-server.typicode.com/typicode/demo/profile')
  return await response.json();
}

export  { FetchPerson }