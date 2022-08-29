import React, { ChangeEvent, FC, useState } from "react";
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

const ThemeChagerPage: FC = () => {
   const [currentTheme, setCurrentTheme] = useState("light");

   const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const seletedTheme = event.target.value;
      setCurrentTheme(seletedTheme);
   };

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

export default ThemeChagerPage;
