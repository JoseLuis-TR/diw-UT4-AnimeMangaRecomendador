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
