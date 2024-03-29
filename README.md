# Ticket Spot - A microservice based application

Live Project link : http://www.myticketspot.live (not active)

![ Images of the App](AppView.png)

## Project details :

The basic idea of the project is to develop an ticket sharing app service using microservice architecture. 
Anyone can create a new ticket for sale (concert,sport event etc…) in the website and make available for anyone to buy it. 

## Technologies used
 
### Frontend 
-	React and Next JS 

### Backend
-	Node and Express.
-	Typescript

### Databases used 
-	Mongo database and Redis.

### Nats Streaming server

### Payment 
-	Stripe API

### Testing
Jest 

### Deployment
-	Entire App is deployed using docker and kubernetes.
-	**Digital Ocean** is used for production deployment 
-	**Google cloud** is used for development.

### NPM Library was created and deployed in NPM

-	Name: @jaytickets/common

### CI/CD deployment using github

## Highlights and Important features I learned:

-	Microservices & Event based Architecture and niches
- Concurrency issues in Microservices
-	Cloud Services (GCP)
-	Reusability of coding
-	Server-Side-Rendereding using React Hooks and Next JS
-	Limit access to APIs using JWT-based authentication

## App Working in Steps

**Authorization Page**
- Sign up and sign in

![ Images of the App](signin.png)

**Create Ticket for sale** 

![ Images of the App](2.png)

**Buying tickets**

![ Images of the App](3.png)

**Payment method - Stripe & Timer for expiration**

![ Images of the App](4.png)

**Payment method - Stripe & Timer for expiration**
For testing stripe payments:

- card num - 4242 4242 4242 4242
- expiry date - any future date and year & 
- CVV code - any 3 digit number

![ Images of the App](5.png)
