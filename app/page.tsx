// "use client";
// import useAxios from "axios-hooks";

import ListProduct from "@/components/List/Product/ListProduct";

const Home = () => {
  // const [{ loading, error, data }, refetch] = useAxios({
  //   url: "http://45.145.65.201:4200/api/product",
  // });
  {
    /* <h1>Users Page</h1>
  <button onClick={() => refetch}>Refetch</button>
  {loading && <p>Loading...</p>}
  {!!error && <p>{error.message}</p>}
  {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>} */
  }

  return (
    <main>
      <ListProduct />
    </main>
  );
};

export default Home;
