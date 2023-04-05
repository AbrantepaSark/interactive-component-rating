import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Star from "../../public/icon-star.svg";

export default function Home(props) {
  const [activeRate, setActiveRate] = useState(0);

  const rate = [1, 2, 3, 4, 5];

  const activeRateHandler = (index) => setActiveRate(index);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.Rectangle}>
          <div className={styles.StarContainer}>
            {/* <Star className={styles.Star} alt="star" /> */}
            <Image src={Star} alt="star" />
          </div>
          <p className={styles.Header}>How did we do?</p>
          <p className={styles.Text}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className={styles.rateBox}>
            {rate.map((value, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeRate === index
                      ? ` ${styles.RateContainer} ${styles.Active}`
                      : styles.RateContainer
                  }
                  onClick={() => activeRateHandler(index)}
                >
                  <p className={styles.rateText}>{value}</p>
                </div>
              );
              //   return <Rate key={index} number={value} click={activeRateHandler} />;
            })}
          </div>
          <Link
            href={{
              pathname: "/rate",
              query: { rate: activeRate + 1 },
            }}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.SubmitButton} onClick={props.submit}>
              <p className={styles.Submit}>SUBMIT</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
