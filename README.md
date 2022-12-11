# DIW - UT4 - Proyecto de maquetación y desarrollo de aplicación web

## Añadir estilos de manera directa ¿Sí o no?

Existen dos maneras diferentes a la hora de añadir estilo a nuestras páginas web de manera directa en el archivo HTML sin necesidad de conectar con una hoja de estilo CSS.

1. Añadir el estilo dentro del mismo elemento al que queramos modificar su estilo.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color:blue;text-align:center;">Esto es un encabezado</h1>
    <p style="color:red;">Esto es un párrafo.</p>
  </body>
</html>
```

2. Añadir el estilo dentro del elemento style que se coloca dentro del head del archivo HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    body {
      background-color: blue;
    }

    h1 {
      color: red;
      font-size: 60px;
    }
    </style>
  </head>
    <body>
      <h1>Esto es un encabezado</h1>
      <p>Esto es un párrafo.</p>
    </body>
</html>
```

Aunque nos pueda ser de ayuda en ciertos momentos donde por ejemplo estemos creando un ejemplo sencillo y 
no queramos molestarnos en crear un archivo CSS y conectarlo al documento HTML, a la hora de la verdad nos crea
un gran inconveniente ya que, aunque pueda parecernos fácil al principio, cuando necesitemos desarrollar un proyecto
más grande como este mismo nos encontraremos con problemas de legibilidad del código y además estaremos creando archivos
enormes, ya que para replicar el estilo de, por ejemplo, un h1 en todas las páginas del proyecto, deberemos de copiar el mismo
código una y otra vez dándonos un problema no solo de redundancia de código, sino que además el proyecto final será mucho más
pesado que si usásemos archivos CSS puros o con alternativas como SASS.

## Problema con el cambio de color de la página de inicio

He tenido diversos problemas con la parte de modificar el color con un boton en la página de inicio por como
he construido las variables y las he usado por la web, por lo que he tenido que crear copias de los diversos archivos
que se ven afectados para cambiar el modo claro/oscuro de la página de inicio. Para poder revisar esta funcionalidad, 
en el archivo main.scss descomentar las lineas que esten comentadas y comentar las lineas de los archivos de los cuales
copia, por ejemplo:

![image](https://user-images.githubusercontent.com/92323915/206932047-22c5c6b4-c7ea-4b0e-b496-b77dfba4ae11.png)

## Poner en funcionamiento el proyecto

```bash
npm run start
```

## Capturas de pantalla de las validaciones de CSS

### Archivo principal
1. main.scss
![image](https://user-images.githubusercontent.com/92323915/206932175-53ac2b0c-848e-41ea-8bfa-a1f78bc55a75.png)

### Carpeta base

2. background.scss
![image](https://user-images.githubusercontent.com/92323915/206932222-9428b7b9-a22e-4b8d-ad11-a484ebdff237.png)

3. background-cambioColor.scss
![image](https://user-images.githubusercontent.com/92323915/206932249-2324fcb5-328e-4293-8164-aecd26a67f9e.png)

4. reset.scss
![image](https://user-images.githubusercontent.com/92323915/206932267-941932a5-b23c-4447-a469-76981eb9d732.png)

### Carpeta components

5. busqueda.scss
![image](https://user-images.githubusercontent.com/92323915/206932294-63432761-d779-4a0d-8a56-e8fea69c5055.png)

6. busqueda-cambiocolor.scss
![image](https://user-images.githubusercontent.com/92323915/206932340-956df029-08b8-4090-844c-abd406f589d5.png)

7. cajaResultados.scss
![image](https://user-images.githubusercontent.com/92323915/206932349-664da76d-5bf0-4def-961e-63dd457db4ce.png)

8. cambioModo.sass
![image](https://user-images.githubusercontent.com/92323915/206932353-535e99ac-eb04-4dd2-a46c-641407292656.png)

9. producto.scss
![image](https://user-images.githubusercontent.com/92323915/206932363-e66be27a-156c-4bf3-a033-341c6984c6ba.png)

10. redesSociales.scss
![image](https://user-images.githubusercontent.com/92323915/206932374-1ab6ac93-a33c-4fc1-aba3-3d2459ae1bb5.png)

### Carpeta layout

11. contenedorResultados.scss
![image](https://user-images.githubusercontent.com/92323915/206932441-6e70c4b6-33d7-4710-8618-7aa018c20905.png)

12. formularioGenerico.scss
![image](https://user-images.githubusercontent.com/92323915/206932489-ad65989b-dff3-4901-8a50-8327c0f2a813.png)

13. header.scss
![image](https://user-images.githubusercontent.com/92323915/206932514-31251639-17b9-474f-af02-52f55a85dc05.png)

14. header-cambiocolor.scss
![image](https://user-images.githubusercontent.com/92323915/206932531-79d83aa9-ac84-49d5-b9a8-c86a03615ae9.png)

15. menu.scss
![image](https://user-images.githubusercontent.com/92323915/206932539-343920bc-f9a8-4abd-848c-40d3ed3ad966.png)

### Carpeta utilities

16. variables.scss
![image](https://user-images.githubusercontent.com/92323915/206932553-aea7555a-4377-4858-8453-16d6cddd15f5.png)

### Carpeta views

17. 404.scss
![image](https://user-images.githubusercontent.com/92323915/206932623-16f917ae-ac43-4d0f-852c-f0114f6307eb.png)

18. index.scss
![image](https://user-images.githubusercontent.com/92323915/206932642-82b2f906-3d39-4d6d-9960-c02ede0c9cdb.png)

19. index-cambioColor.scss
![image](https://user-images.githubusercontent.com/92323915/206932654-f0001f43-abcd-46b7-8556-0c3ff2480f6a.png)

20. login.scss
![image](https://user-images.githubusercontent.com/92323915/206932665-e4f5721d-06da-45d9-a9fb-bcde17ee82e3.png)

21. myList.scss
![image](https://user-images.githubusercontent.com/92323915/206932676-70e59ce4-b3dd-4f0d-a22d-f5b52c70867d.png)

22. perfil.scss
23. registro.scss
24. searchResult.scss
