const http = require("http");

// http.createServer((req,res)=>{
//     res.end("hello")

// }).listen(3000)

const server = http.createServer();
server.on("request", (req, res) => {
  let location='';
  http.get("http://ip-api.com/json", (response) => {
    response.on("data", (data) => {
      location += data;
        response.on("end", () => {
        console.log(JSON.parse(location))
        let actualdata=JSON.parse(location)
        res.end(`Below is your information: \n 
        Country : ${actualdata.country} \n 
        Country code: ${actualdata.countryCode} \n 
        Time zone: ${actualdata.timezone}   \n ` );
      });
    });
  });
});

server.listen(3000);
