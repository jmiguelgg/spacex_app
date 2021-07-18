# Project frontend using SpaceX API with GraphQL

This project is React Native APP that conect the SpaceX API to display a list of missions and the detail of each one.

To run this app you first need to install de packages from npm or yarn

### `yarn`
### `npm install`
These comands install the package required

The second steep is to add the .env file to get the corresponding endpoint; create a file .env and add the following inside:
### `API_URL=https://api.spacex.land/graphql/`

For iOS plataform you need also install de pods files. Navigate to the ios/ directory and run the bellow comand
### `cd ios/`
### `pod install`

To run the aplication on each plataform run the corresponding comand.
### `yarn ios   o   npm run ios`
### `yarn android   o   npm run android`