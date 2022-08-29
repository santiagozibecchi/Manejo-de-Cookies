## Instalacion del paquete material-icons

````
yarn add @mui/icons-material --network-timeout 500000```
````

### A los components -> export const ComponentName = () => {...}

`Atajo: rafc`

### A las paginas de Next -> export default const ...

`Atajo: rafce`

### Trabajar con cookies

Como bien sabemos, NextJs tiene el lado del front-end y back-end
La parte de back-end, practicamente ya viene lista para que no usemos el paquete de `js-cookie` o nada en particular. Simplementa arragamos las cookies y las usamos

Para la parte del front-end, si es mas sencillo utilizar el paquete `js-cookie`, ya que es mas facil establecer y leer las cookies de alli.

## ¿Qué es y para qué sirven las cookies?

Las cookies son pequeños fragmentos de texto que los sitios web que visitas envían al navegador. Permiten que los sitios web recuerden información sobre tu visita, lo que puede hacer que sea más fácil volver a visitar los sitios y hacer que estos te resulten más útiles.

### Principal diferencia entre las cookies y el local storage

Las cookies solo tienen 4 kb de informacion que se pueden grabar, es decir, una fraccion del local storage
El principal beneficio de las cookies es que son enviadas a el backend en request-time, es decir, las personas no hacen ninguna solicitud. Una vez activada, inmediatamente se la manda al backend.
