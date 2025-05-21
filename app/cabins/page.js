import Counter from "../_components/counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>Cabins</h1>
      <p>Cabins page</p>
      <ul>
        {data.map((user) => (
          <>
            <li key={user.id}>{user.name}</li>
            <li key={user.id}>{user.email}</li>
            <li key={user.id}>{user.city}</li>
          </>
        ))}
      </ul>
      <Counter />
    </div>
  );
}
