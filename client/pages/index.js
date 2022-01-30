import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {NumbersComponent()}
      </main>
    </div>
  )
}

function NumbersComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numbers, setNumbers] = useState([]);

  const getNumbers = async () => {
    setIsLoaded(false);
    fetch('/api/get')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setNumbers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
  const insertNumber = () => {
    fetch('/api/insert').then(() => getNumbers())
  }
  const clearNumbers = () => {
    fetch('/api/clear').then(() => getNumbers())
  }

  useEffect(() => getNumbers(), [])

  let liKey = 0;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>    
      <ul>
        <p>Numbers:</p>
        {numbers.map(number => (
          <li key={liKey++}>
            {number.number}
          </li>
        ))}
      </ul>
      <button onClick={insertNumber}>Insert number</button>
      <button onClick={clearNumbers}>Clear numbers</button>
      </div>
    );
  }
}