# cursojs20230717b

# crear un proyecto de node
* NodeJS es la herramienta que usamos para trabajar en JavaScript.
* NPM viene incluido con NodeJS, NPM es un manejador de paquetes (proyectos)
   * Crear un proyecto de NodeJS
   * Instalar librerias
   * Actualizar librerias
   * Ejecutar el proyecto
   * Probar el proyecto.

```shell
npm init
```

Eso va a crear un archivo package.json que tiene la definicion del proyecto (paquete) que vamos a trabajar.

Luego de creado package.json, indicar el tipo de paquete y agregar "type": "module",

## instalar nueva liberia con el npm.

1) ir a la pagina de npm https://www.npmjs.com/


2) copiar el codigo

3) y ejecutarlo en el terminal

```shell
npm i rutlib
``

en package.json se va a agregar lo siguiente:
```json
  "license": "ISC",
  "dependencies": {
    "rutlib": "^1.0.3"
  }
``
* Sin ningun simbolo indica que solo se debe usar una version en especifica, ejemplo "1.0.3"
* El simbolo ^ indique que se puede actualizar a cualquier version 1.* "^1.0.3"
* El simbolo > indica que se puede actualizar a cualquier version 1 o superior. ">1.0.3"

## correr el proyecto

```shell
npm start
```

## instalar librerias indicadas en package.json

> Con este comando tambien se actualizan las librerias.

```shell
npm install
```

## SRP
Responsabilidad de principio simple.
* Separar el proyecto en diferentes partes que sean mas manejables.
* En este caso, el codigo se separa en lo que es los datos de las operaciones (funcion).

* Modelo: Se refiere a los datos.
* Vista: Mostrar en la pantalla la visualizacion.

> No necesariamente tiene que estar separado en diferentes archivos.

### Modelo vista

El modelo vista trabajar de la siguiente manera:
* Hay datos
* Y esos datos se muestran formateados en alguna parte.
* modelo -> vista.
* no trabaja asi: vista -> modelo.

¿Por que?
* Es mas facil de entender el codigo
* Es mas facil de darle mantencion.
* Es mas facil crear el codigo.

