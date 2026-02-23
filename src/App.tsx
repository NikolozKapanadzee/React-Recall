import useFetch from "./hooks/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const users = useFetch<User>("https://jsonplaceholder.typicode.com/users");
  const posts = useFetch<Post>("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
