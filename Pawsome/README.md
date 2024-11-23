# Configuración del Entorno de DevOps para el Proyecto

Este repositorio contiene los archivos necesarios para configurar y ejecutar el entorno de desarrollo utilizando Docker y Docker Compose. A continuación, se describen los pasos necesarios para instalar y ejecutar los contenedores del proyecto.

## **Requisitos Previos**

Asegúrate de tener instalados los siguientes programas:

1. [Docker](https://www.docker.com/get-started)  
   Descárgalo e instálalo desde el enlace oficial.

2. [Docker Compose](https://docs.docker.com/compose/install/)  
   Docker Compose generalmente viene incluido con Docker Desktop.

3. Un editor de texto o IDE, como [VS Code](https://code.visualstudio.com/).

NOTA: Si tienes instalado Docker Desktop no necesitas descargar docker compose.

## **Estructura del Repositorio**

La estructura de este repositorio es la siguiente:

´´´bash
devops/
├── Pawsome/
│ ├── docker-compose.yml
│ ├── .env
│ └── README.md
´´´

- `docker-compose.yml`: Archivo principal para levantar los servicios Docker.
- `.env`: Archivo con las variables de entorno necesarias.
- `README.md`: Este archivo, con instrucciones detalladas.

## **Variables de Entorno**

El archivo `.env` contiene las siguientes variables:

```env
URI=mongodb://mongo:27017/pawsome
MONGO_DB=pawsome
```

Asegúrate de que el archivo .env esté presente en el directorio raíz del repositorio devops/.

## **Pasos para Ejecutar el Proyecto**

1. Clonar los repositorios:
   Clona este repo dentro de tu carpeta del proyecto, donde también debes tener el repo del back y el frontend.

```bash
git clone <URL_DEL_REPOSITORIO_DEVOPS>
git clone <URL_DEL_REPOSITORIO_BACKEND>
```

2. Estructura de directorios
   La estructura del proyecto debe ser similar a la siguiente:

```
proyecto/
├── devops/
│   ├── Pawsome/
│   │   ├── docker-compose.yml
│   │   ├── .env
│   │   └── README.md
├── i004-pawsome-back/
│   ├── Dockerfile
│   └── (otros archivos del backend)
├── i004-pawsome-front/
│   ├── Dockerfile
│   └── (otros archivos del frontend)
```

3. Levantar los contenedores
   Desde la carpeta `devops` ejecuta el siguiente comando:

```bash
docker compose --profile dev up --build
```

Esto hará lo siguiente:

- Levantará un contenedor para la base de datos MongoDB.
- Levantará un contenedor para el backend, conectándolo a MongoDB.

4. Acceso a los servicios
   Puertos Utilizados:

- Backend: Disponible en http://localhost:3000.
- Frontend: Disponible en http://localhost:5173.
- Base de Datos MongoDB: Disponible en el puerto 27017.

## **Comandos útiles**

- Detener los contenedores:

```bash
docker-compose down
```

- Reconstruir los contenedores:

```bash
docker-compose --profile dev up --build
```

- Ver logs en tiempo real:

```bash
docker-compose logs -f
```

## **Solución de problemas**

1. El puerto ya está en uso:
   Asegúrate de que ningún otro servicio esté usando los puertos 3000 o 27017. Puedes detener servicios en conflicto con:

```bash
docker ps
docker stop <ID_DEL_CONTENEDOR_EN_CONFLICTO>
```

2. Cambios no reflejados en el backend:
   Asegúrate de que el contenedor utiliza volúmenes. Si el problema persiste, reinicia los contenedores con:

```bash
docker-compose down
docker-compose up --build
```

3. Error de conexión con MongoDB:
   Verifica que las variables de entorno en .env estén configuradas correctamente. También asegúrate de que el contenedor de MongoDB esté corriendo.

## **Población de la base de datos (seeding)**

Después de configurar el proyecto, es posible que desees poblar la base de datos con datos iniciales para desarrollo o pruebas. Corre el script:

´´´bash
npm run seed
´´´

## **Notas finales**

- Este entorno está configurado para un entorno de desarrollo. No utilices estas configuraciones directamente en producción.
- Para dudas o problemas, consulta con el equipo de desarrollo o el responsable de DevOps.

  ¡Feliz desarrollo! 🚀
