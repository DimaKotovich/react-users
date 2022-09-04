export const getUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  return response.json();
};

export const getPosts = async (userid) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/todos`);

  return response.json();
};

export const getAlbums = async (userid) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/albums`);

  return response.json();
};
