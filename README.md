# Stackhack Hackathon 1.0

This web application is made for the virtual hackathon hosted by hackerearth(from may ,8, 2020 to june ,8 2020)

This is an event-registration web-application provided with a super user(admin) portal. This site can be used to provide the registration for any grand or big event, here for instance I have used an upcoming musical concert that is to be held  in some days at new-Delhi. But it’s just a sample. Well our app provides basic as well as advanced functionalities. Here the most basic functionality, that is to successfully registered for the event, for this user has to fill a given form consisting of some basic required fields (name, contact -no, email, image of their id proof, type of reg.,no. of tickets for the event), Here we are using email as a unique auth, which means one email can be registered only once. The user can preview their registration and  finally when they successfully registered we will generate a registration no. for them.

Now for the super user i.e. admin side, admin can log-in to its portal by provide its credentials, once logged in, admin can access everything like seeing the no. of registration in each category of registration like self, corporate, group etc. and also he access details of any registration by just searching the registration number generated in user’s registration . He can see every registration that has done for the event.   


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node-js,
validator,
nodemon,
multer,
morgan,
mongoose,
http-errors,
express-session,
express,
ejs,
debug,
cookie-parser
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm i nodemon
```

And repeat this for every package that is stated in Prequistics




## Running the tests
```
To test the system you have to first do register for event and then see in the admin portal for further testing


```
## admin credentials 
These credentials are used for logging into the admin portal to see each movement in registration

id: admin@gmail.com
password: admin

# running project available

```
https://new-react-app1.herokuapp.com/
```

