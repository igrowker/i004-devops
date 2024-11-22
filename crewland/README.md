# i004-devops


1. ejecutar el script clone-repos
    Para OS Windows   -> clone-repos.ps1
    Paea OS Linux/MAC -> clone-repos.sh
2. crear el .env file dentro de i004-devops
#### ejemplo de .env  ####
PORT=3000   #Backend port
DB_PORT=5432
DB_HOST=postgres
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=crewlanddb

JWT_SECRET=JWT_CREWLAND_SECRET
JWT_TOKEN_EXPIRED=8h
DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=SCHEMA
##########################

3. ejecutar el siguiente comando para desplegar
docker-compose up --build
