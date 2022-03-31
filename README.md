# Getting Started with Instasearch App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To install all dependancy 

### Run 'yarn install' 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### Dataset sourse
https://www.kaggle.com/datasets/gregorut/videogamesales


## Some of the packages used:

- SaaS
- algoliasearch
- react-instantsearch
## Description

I have build this simple app using Algolia Instant Search, over 'Video Games' dataset with 7k records.
Here are some of the key points:

- Searchable attributes: Name, Publisher, Genre and Platform.
- Filters for Genre, PLatform and Publisher with 2 options as Menu and RefinementList with seacrh bar.
- Pagination limited to 1k Hits.

NOTE: SortBy is not active as I cant create replica of the index to be able to filter through attributes (space limited to 10k records)
## TODO:

- Add photo to every record, perhaps using publisher Name attribute?
- Implement testig (unit, E2E)
- Refactor code by following DRY principle where possible
- Use library for styling? Update design?
- Add/change favIcon, meta tags
- Re-design for all screen sizes
- Reduce unused JS, Minify


