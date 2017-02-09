# Psych Unit Locator

This app is a reconfigured version made with the MEAN Stack. (Used to have Firebase backend). It will use Google Maps

## File Structure

```
/app
	/models
		location.js - Location models
		user.js
	route.js - contains routes

/config
	database.js - contains MongoDB connection

/public
	core.js - angular app
	index.html

package.json - npm configuration
server.js - starts Node app
README.md - contains this info
.gitignore
```

## Backend

The backend is built on NodeJS, Express and MongoDB :

Dependencies :
--------------
1. express
2. mongoose
3. body-parser
4. passport
5. method-override
6. morgan
7. bcrypt-nodejs

## Frontend

The frontend is built on AngularJS, Bootstrap :

Dependencies :
--------------
1. AngularJS
2. ngRouter
3. ui-bootstrap
4. Font-awesome
5. Bootstrap
