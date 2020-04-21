# getting-hapi
Node Js, Hapi Js, Swagger, Sequelize

## Live on Heroku Server
* https://getting-hapi.herokuapp.com/

### Local Environment Setup
> Node: v12.14.0

> Npm: 6.13.4


##### Install Node Packages:

* Using npm: npm install 
* Using yarn: yarn install


##### Database: 

First, you have to add `.env` file at root and add required key/value pair, Also update in config/db.js

> NODE_ENV=development
> 
> HOST=0.0.0.0
> 
> PORT=3000
> 
> DB_USERNAME=username
> 
> DB_PASSWORD=password
> 
> DB_DATABASE=gettingStartedTypeScript
> 
> DB_DIALECT=mysql
> 
> JWT_KEY=K7J/oiwlAmYgs5dfgF7mi3CqxXLnrxQJnS0menBXwiaF2h/EFBbxLsBZpbi/nYbewrBr5TyoyOFWvftizUNsdfsdf41Q==

* Add database: npm run db


# On Ubuntu Machine

You can update JWT_KEY with random generated key

open terminal and write below command, hit enter

    node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"


##### Run app: 

* Using npm: npm run start
* Using yarn: yarn run start