
"use client"
import Script from "next/script";
import location from "../locations"
function page() {
  return (
    <div>
      {/* To load a third-party script for all routes, import next/script and include the script directly in your custom _app:
      here only location.js file will run not every time
       */}
      <Script
       src={location} />
      <h1>script page</h1>
    </div>
  );
}

export default page;
