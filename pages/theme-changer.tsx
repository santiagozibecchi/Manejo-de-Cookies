import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

import {
   Button,
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

interface Props {
   theme: string;
}

const ThemeChagerPage: FC<Props> = ({ theme }) => {
   // console.log({ props });
   const [currentTheme, setCurrentTheme] = useState(theme);

   const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const seletedTheme = event.target.value;
      setCurrentTheme(seletedTheme);

      localStorage.setItem("theme", seletedTheme);
      Cookies.set("theme", seletedTheme);
   };

   const onClick = async () => {
      const { data } = await axios.get("/api/hello");
      console.log({ data });
   };

   useEffect(() => {
      console.log("LocalStorage", localStorage.getItem("theme"));
      console.log("Cookies", Cookies.get("theme"));
   }, []);

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

               <Button onClick={onClick}>Solicitud</Button>
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

   const validThemes = ["light", "dark", "custom"];

   console.log(req);
   return {
      props: {
         theme: validThemes.includes(theme) ? theme : "dark",
         name,
      },
   };
};

export default ThemeChagerPage;
