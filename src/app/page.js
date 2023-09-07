"use client";
import { Component, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // use client
  // to use onclik we need to tell whethers its client side rendering or server side rendering

  // in next js if we changes any variables the Component dont re-render its only rerender when  state get change


  let data = "pushpendraCodes";
  const [name ,setdata]=useState("pushpendraCodes")
  const handelClick = () => {
    // data = "github";
    setdata("github")
  };
  const InnerComponent = ()=>{
   return  (
    <h2>innerComponent</h2>
   )
  }
  return (
    <main className={styles.main}>
      <h2>{name}</h2>

      <button
        onClick={() => {
          handelClick();
        }}
      >
        click
      </button>
      {/* <InnerComponent/> */}
      {InnerComponent()}
    </main>
  );
}
