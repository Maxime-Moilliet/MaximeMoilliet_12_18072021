# Project 9 - Dashboard SportSee

This repo contains all the source code to run the micro API and react frontend for the sports analytics dashboard SportSee.

# Backend Install

## General information

To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

# Clone repo

I use the package manager yarn for this project.


```bash
git clone https://github.com/Maxime-Moilliet/MaximeMoilliet_12_18072021
``` 



# Backend Install

## Dependencies
    - nodejs (12.18)
    - yarn


## 1. Launching project


Step 1 : Go to the project folder

```bash
cd MaximeMoilliet_12_18072021
```

Step 2 : Install all dependencies

```bash
yarn install
```

Step 3 : Run server

```bash
yarn dev
```

## 2. Launching project with docker


### Dependencies
    - Docker Desktop

### Launching with docker

this command will allow you to build your image.

```bash
docker image build --no-cache -t micro-api .
```

this command will allow you to create your Docker container and run your image on port 3000.

```bash
docker container run --name micro-api -p 3000:3000 -dt micro-api yarn
```

this command will allow you to stop your micro-api.

```bash
docker container stop micro-api
```

this command will allow you to delete your micro-api container.

```bash
docker container rm micro-api
```

## 3. Endpoints

This project includes four endpoints that you will be able to use:

    - http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.),
    - http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
    - http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
    - http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

# Frontend Install

## Dependencies
   - react (17.0.2), 
   - react-router-dom (5.2.0),
   - recharts (2.0.10),
   - node-sass (4.14.1),
   - axios (0.21.1).


## 1. Start project

Step 1 : Go to the client folder

```bash
cd client
```

Step 2 : Install all dependencies

```bash
yarn install
```

Step 3 : Run server

```bash
yarn start
```



