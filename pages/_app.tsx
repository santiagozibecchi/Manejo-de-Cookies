import { useState, useEffect } from "react";
import type { AppContext, AppProps } from "next/app";
import "../styles/globals.css";

import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme, customTheme } from "../themes";
import Cookies from "js-cookie";

interface Props extends AppProps {
   theme: string;
}

function MyApp({ Component, pageProps, theme = "dark" }: Props) {
   // console.log({ theme });
   // Inicialmente el theme por defecto cuando se renderice por primera
   //  vez por el lado del client y servidor sera lightTheme
   const [currentTheme, setCurrentTheme] = useState(lightTheme);

   // pero tan pronto como se dispare el efecto
   useEffect(() => {
      // Este efecto va a revisar la cookie
      const cookieTheme = Cookies.get("theme") || "light";

      const selectedTheme: Theme =
         cookieTheme === "light"
            ? lightTheme
            : cookieTheme === "dark"
            ? darkTheme
            : customTheme;

      setCurrentTheme(selectedTheme);
   }, []);

   // * Hay que asegurarse que el contenido que se genera en el lado del cliente
   // * sea el mismo que se genera en el lado del servidor, caso contrario da un error
   //  * de tipo did not match: Server

   return (
      <ThemeProvider theme={currentTheme}>
         <CssBaseline>
            <Component {...pageProps} />
         </CssBaseline>
      </ThemeProvider>
   );
}

// ! No es muy recomendable utilizar getInitialProps => Perdemos instantaneamente
// ! el poder utilizar el staticGeneration
// ! Por lo que, cada peticion se dirige al servidor y generara una respuesta
// MyApp.getInitialProps = async (appContext: AppContext) => {
//    const { theme } = appContext.ctx.req
//       ? (appContext.ctx.req as any).cookies
//       : { theme: "light" };

//    // console.log("getInitialProps", cookies);
//    const validThemes = ["light", "dark", "custom"];

//    return {
//       theme: validThemes.includes(theme) ? theme : "dark",
//    };
// };

export default MyApp;
