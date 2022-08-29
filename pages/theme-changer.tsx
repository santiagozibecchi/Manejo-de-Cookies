import {
   Card,
   CardContent,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
} from "@mui/material";
import React from "react";
import { Layout } from "../components/layouts";

const ThemeChagerPage = () => {
   return (
      <Layout>
         <Card>
            <CardContent>
               <FormControl>
                  <FormLabel>Tema</FormLabel>
                  <RadioGroup>
                     <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="light"
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
