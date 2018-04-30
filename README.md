# Vehicle Energy Efficiency Class calculator

Demo is deployed to [eec.poohitan.com](https://eec.poohitan.com)
* POST https://eec.poohitan.com/calculate — calculates the CO2 ref value & deviation and stores the result in the database. (Request example: `curl -H "Content-Type: application/json" -X POST -d '{"co2Value": 95, "vehicleWeight": 2500}' https://eec.poohitan.com/calculate`)
* GET https://eec.poohitan.com/list — lists all the request/results records in the order of request time. (Request example: `curl https://eec.poohitan.com/list`)

## Prerequisites
* Node 8 & NPM
* sqlite3 (`brew install sqlite3`)

## Install
* Clone this repo
* `cd` into the project directory
* `npm install`
* `npm run migrate`
* `npm start`

## Test
* `npm run test`
