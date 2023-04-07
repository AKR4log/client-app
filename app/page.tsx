"use client";

import useAxios from "axios-hooks";
import styles from "./page.module.css";

const Home = () => {
  const [{ loading, error, data }, refetch] = useAxios({
    url: "http://45.145.65.201:4200/api/product",
  });

  return (
    <main className={styles.main}>
      <h1>Users Page</h1>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </main>
  );
};

export default Home;
