let request = require('request');
let user = require('./userInput');
module.exports = {
    isDatePrime: async function (num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    },
    fetchDataFromApi: async function (res) {
        //here we are fetching data from weatherApi 
        let city = user.city;
        let state=user.state;
        let api=user.api;
        request.get("http://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&APPID="+api, (error, response, body) => {
            if (error) {
                console.dir(error);
            }
            res.send(JSON.parse(body));
        });
    },
    weatherResult: async function (res) {
        //get Today - system date
        let today = new Date();
        today = today.getDate()
        // today = 17;
        //check whether it is prime or not and send responce accordingly
        let result = await this.isDatePrime(today)
        if (result) {
            await this.fetchDataFromApi(res)
        } else {
            res.send("Date is not prime so no date")
        }
    }

}