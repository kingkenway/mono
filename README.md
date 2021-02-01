# Mono-Connect API Implementation

## Table of Contents  

[1. Overview](#1-overview) 

[2. Implementation](#2-implementation) 

[3. Installation](#3-installation)  


## 1. Overview  

Project #sweet-loans [(link)](https://sweet-loans.herokuapp.com/) is a simple web application that allows its users to connect their financial account, see their information, transactions, balances and also fetch real time data that happens on their financial account.  
It is built with NodeJS Express, which basically implements the core features of the Mono-Connect [API](https://docs.mono.co/reference).  

## 2. Implementation  

- Create an account [here](https://app.withmono.com/register) on Mono, then wait for your account to be approved.  

- Once confirmed, login to your dashboard and create an application. Thereafter, take note of your MONO_SECRET_KEY and MONO_PUBLIC_KEY.  

- Next you would need to embed the Mono Widget ( [here](https://docs.mono.co/docs) or [here](https://github.com/withmono/A-sample-widget-setup) ) on your application. Don't forget to change to your public key.  

- Here, once user account is successfully linked from widget, the user's Mono code will be provided in this format  
```
{
	code: "some random code" // code returned from the mono widget
}
```  
Ensure this code is stored in your database.  

- Now, you authenticate this code against Mono's API Endpoint -> https://api.withmono.com/account/auth using POST as the Method.
```
{
	id: "Mono ID. for current user" // code returned from the mono's authentication api
}
```  


## 3. Installation

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
