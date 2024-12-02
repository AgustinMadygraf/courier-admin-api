# API de Administración de Courier (basada en Parse Server)

Parse Server con funciones en la nube. Tiene soporte para Docker, lo que permite ejecutarlo junto con una base de datos Mongo containerizada y Parse Dashboard.

Está diseñado para ser utilizado junto con el [Panel de Administración de Courier](https://github.com/nayracoop/courier-admin-dashboard).

## Configuración

Los valores de configuración, ya sea para ejecutar la API con Docker o localmente (por ejemplo, para facilitar la depuración), deben colocarse en un archivo **`.env`**. Puedes usar [.env-example](.env-example) como base.

El archivo **`.env`** es utilizado por el módulo [dotenv](https://github.com/motdotla/dotenv) para llenar las variables de entorno de Node y como marcadores de posición en el archivo [docker-compose.yml](docker-compose.yml).

Se incluyen claves para diferentes puertos utilizados por Mongo, Parse Server y Parse Dashboard en los contenedores de Docker. **`*_PORT`** se refiere al puerto dentro del contenedor y **`*_LOCAL_PORT`** al de la máquina anfitriona.

### Sincronización con Xubio

[Xubio](https://xubio.com/) es una herramienta de gestión comercial en línea.  
Los nuevos registros creados para Clientes y Proveedores en el Panel de Administración de Courier se sincronizan automáticamente con Xubio utilizando [Funciones en la Nube de Parse Server](https://docs.parseplatform.org/cloudcode/guide/#cloud-functions). También se admite la creación de presupuestos y órdenes de compra mediante funciones en la nube, almacenadas en la carpeta [cloud](/cloud).

Para configurarlo:

- Necesitarás una [suscripción PLUS o superior](https://xubio.com/ar/precios) para usar la API de Xubio.
- Obtén tus claves API desde la [página de integraciones](https://xubio.com/NXV/configuracion/integraciones/api-de-xubio).
- **`Client_id`** y **`Secret_id`** deben colocarse en las claves correspondientes del archivo **`.env`**: **`XUBIO_CLIENT_ID`** y **`XUBIO_SECRET`**, respectivamente. Consulta [.env-example](.env-example) como base.

### Parse Server

La API se basa en [Parse Server](https://parseplatform.org/). Puedes encontrar valores de configuración de ejemplo para tu archivo **`.env`** como claves **`PARSE_SERVER_*`** en [.env-example](.env-example).

### Parse Dashboard

El archivo **`docker-compose.yml`** incluye una entrada para [Parse Dashboard](https://hub.docker.com/r/parseplatform/parse-dashboard). Puedes encontrar valores de configuración de ejemplo para tu archivo **`.env`** como claves **`PARSE_DASHBOARD_*`** en [.env-example](.env-example).

Los valores de **`PARSE_USER1`** y **`PARSE_USER1_PASSWORD`** en tu archivo **`.env`**, se usan para crear el usuario y la contraseña que permitirán el acceso a Parse Dashboard.

### Mongo DB

La base de datos se configura utilizando la clave **`MONGODB_URI`** y las claves **`DB_*`**. Por favor, revisa [.env-example](.env-example) para ejemplos.

### UPS

La comunicación con UPS fue planificada pero no implementada, y no está en los planes inmediatos continuar con ella. Las claves **`UPS_`** para esa integración aún están presentes en [.env-example](.env-example).

## Desarrollo

### Instalación

- Clona el repositorio y ejecuta **`npm install`**.
- Clona, configura y ejecuta el [Panel de Administración de Courier](https://github.com/nayracoop/courier-admin-dashboard.git) para contar con un cliente funcional para la API.

### Uso

- En la sección de configuración anterior encontrarás detalles sobre cómo completar tu archivo **`.env`**.
- Sirve la aplicación con [nodemon](https://nodemon.io/) utilizando **`npm run dev`** ⚡.

### Migraciones de base de datos

- Las migraciones pueden colocarse en la carpeta [/tasks/migrations](/tasks/migrations). Para ejecutarlas con [Jake](https://jakejs.com/) (y para ejecutar la migración inicial, que funciona como ejemplo/plantilla y crea usuarios), puedes ejecutar **`npm run migrations`** ⚡.

### Uso con Docker Compose

- Si tienes Docker y la CLI de docker-compose instalados, puedes ejecutar **`docker-compose up`** para obtener una API funcional, Parse Server, Parse Dashboard y Mongo DB en funcionamiento. Para más detalles, revisa el archivo [docker-compose.yml](docker-compose.yml) y la [documentación de docker-compose](https://docs.docker.com/compose/reference/up/).

## Licencia

<img src="https://img.shields.io/badge/license-GPL--3-brightgreen" alt="Licencia GNU General Public License v3.0"> Licencia Pública General GNU v3.0