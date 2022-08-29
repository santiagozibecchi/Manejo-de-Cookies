import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Head>
            <title></title>
         </Head>

         <nav>
            <Navbar />
         </nav>

         <main style={{ padding: "20px 50px" }}>{children}</main>
      </>
   );
};
