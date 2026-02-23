import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function useFetch() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);
  return users;
}

export default useFetch;
