# Mono-Connect API Implementation

## Table of Contents  

[1. Overview](#1-overview) 

[2. Implementation](#2-implementation) 

[3. Installation](#3-installation)  


### 1. Overview  

Project #sweet-loans [(link)](https://sweet-loans.herokuapp.com/) is a simple Express NodeJS application, that basically implements the core features of the Mono-Connect [API](https://docs.mono.co/reference).  

### 2. Implementation  

a. Create an account [here](https://app.withmono.com/register) on Mono, then wait for your account to be approved  

b. Once confirmed, login to your dashboard and create an application. Thereafter, take note of your MONO_PUBLIC_KEY and MONO_PUBLIC_KEY.  

c. Next you would embed the Mono Widget [here] [here](https://github.com/withmono/A-sample-widget-setup) on your application. Don't forget to change to your public key  


### 3. Installation

The first thing to do is to clone the repository:


```sh
$ git clone https://github.com/kingkenway/mono.git
$ cd mono
```

## Local Environment Variables
DATABASE_URL='Your Mongo DB URL'  
MONO_SECRET_KEY='Your Mono Secret Key on your dashboard'  
MONO_PUBLIC_KEY='Your Mono Public Key on your dashboard'  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
nodemon app.js or node app.js
```
