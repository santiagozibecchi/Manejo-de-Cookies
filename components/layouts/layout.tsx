import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";

const layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Head></Head>

         <nav>{/* Navbar */}</nav>

         <main style={{ padding: "20px 50px" }}>{children}</main>
      </>
   );
};

export default layout;
