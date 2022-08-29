import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import {
   Card,
   CardContent,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
} from "@mui/material";
import { Layout } from "../components/layouts";
import Cookies from "js-cookie";

const ThemeChagerPage: FC = (props) => {
   console.log({ props });
   const [currentTheme, setCurrentTheme] = useState("light");

   const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const seletedTheme = event.target.value;
      setCurrentTheme(seletedTheme);
      Cookies.set("theme", seletedTheme);
   };

   // useEffect(() => {}, []);

   return (
      <Layout>
         <Card>
            <CardContent>
               <FormControl>
                  <FormLabel>Tema</FormLabel>
                  <RadioGroup value={currentTheme} onChange={onThemeChange}>
                     <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="Light"
                     />
                     <FormControlLabel
                        value="dark"
                        control={<Radio />}
                        label="Dark"
                     />
                     <FormControlLabel
                        value="custom"
                        control={<Radio />}
                        label="Custom"
                     />
                  </RadioGroup>
               </FormControl>
            </CardContent>
         </Card>
      </Layout>
   );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
   // La request es la solicitud del cliente

   // const cookies = req.cookies
   const { theme = "light", name = "no name" } = req.cookies;

   console.log(req);
   return {
      props: {
         theme,
         name,
      },
   };
};

export default ThemeChagerPage;
