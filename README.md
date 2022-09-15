# rest-api-test

```bash

# Vi har skapat en docker compose fil för att skapa en utvecklingsmiljö
cd ~/jensen-backend/JENSENfy-backend-14

# Vår compose fil ser ut så här

cat docker-compose.yml

# Vi ska först stoppa alla docker processer
docker kill $(docker ps -q)

# Och nu ska vi starta vår utvecklingsmijö
docker-compose up -d

# Och här ser ni vår mongodb databas, och backend server
docker ps

# Och för att visa att servern  fungerar går vi nu mot vår svagger api
http://localhost:8080

# Och vi ska visa post metoden
...

# Tack för oss
