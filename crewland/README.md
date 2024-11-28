# i004-devops


1. ejecutar el script clone-repos
    Para OS Windows   -> clone-repos.ps1
    Paea OS Linux/MAC -> clone-repos.sh
2. crear el .env file dentro de i004-devops
#### ejemplo de .env  ####
######################################################################
PORT=3000
JWT_SECRET="JWT_CREWLAND_SECRET"
JWT_TOKEN_EXPIRED="8h"
# typeorm
DB_PORT=1111
DB_HOST=postgres
DB_USERNAME=postgres
DB_PASSWORD=PASSWORD
DB_NAME=crewlanddb
DB_MIGRATE_DATA = true
DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=SCHEMA
# twilo
TWILIO_ACCOUNT_SID=.............
TWILIO_AUTH_TOKEN=............
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
# sendgrip
SENDGRID_AUTH_TOKEN=...........
SENDGRID_API_KEY=...................
SENDGRID_FROM_EMAIL=crewlandevents@gmail.com
SENDGRID_REPLY_TO=crewlandevents@gmail.com
######################################################################

3. ejecutar el siguiente comando para desplegar
docker-compose up --build

