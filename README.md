# AirCnC - Cadastro e Busca de Spots de tecnologia

> Semana Omnistack 9.0

## Instalação e utilização

### Backend - Node.js

1.  Acesse a pasta server e siga os passos abaixos:
2.  Rodar 'yarn' para instalar as dependências
3.  Instalar, criar e subir um banco de dados Postgres (Usei via docker):
```
docker run --name postgresgympoint -e POSTGRES_PASSWORD=gympoint -p 5432:5432 -d postgres:11
```
4.  Instalar, criar e subir um banco de dados Redis (Usei via docker):
```
docker run --name redisgympoint -p 6379:6379 -d -t redis:alpine
```
5.  Crie um banco de dados MongoDB, e crie um database chamado aircnc
6.  Alterar o arquivo .env.example para .env e alterar as informações
7. Rodar 'yarn dev'.


### Frontend WEB - REACTJS

1.  Acesse a pasta web
2.  Rodar 'yarn' para instalar as dependências
3.  Rodar 'yarn start'

### Mobile APP - React Native

1.  Acesse a pasta app
2.  Rodar 'yarn' para instalar as dependências
3.  Alterar o arquivo .env.example para .env e alterar as informações
4.  Rodar 'expo start'
5.  Escaneie o QR code como app da Expo no celular
6.  Obs: para emular no celular físico, rodar os comandos:
``` 
adb reverse tcp:8081 tcp:8081 // App
adb reverse tcp:3333 tcp:3333 // Api
adb reverse tcp:9090 tcp:9090 // Reactotron
```

Obs: Projeto testado apenas no Android