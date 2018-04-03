const express = require('express')
var request = require("request");

const bodyParser = require('body-parser')
const webpack = require('webpack')
var http = require("https");
var cors = require('cors');
var _ = require('lodash');
const app = express()

const jsonParser = bodyParser.json()
const base_auth = process.argv[2];
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8080'}));

//get details of storage
app.get('/getStorageListing', function(req, response) {
  var options = {
    "method": "GET",
    "hostname": "api.upcloud.com",
    "port": null,
    "path": "/1.2/storage",
    "headers": {
      "authorization": base_auth,
      "accept": "application/json",
      "cache-control": "no-cache",
    }
  };
  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      let arrStorage =  JSON.parse(body.toString())
      console.log('server array:', arrStorage)
      //callback(serverArray.servers.server)
    });
  });

  req.end();
})

//get details of server
app.get('/getServerListing', function(req,response) {
    getServers(function callback(data){
        // console.log("data:",data)
        let serverArray = []
        let requests = _.forEach(data, function(server) {
              // console.log("server:",server.uuid);
              getServerDetail(server.uuid,function cb(server_details){
                //  console.log("data:",data)
                  serverArray.push(server_details.server)
                  // console.log("serverArray.length  === data.length:",serverArray.length," ", data.length)
                  if(serverArray.length  === data.length) {
                      response.send(serverArray)
                  }  
              })
              
        });
      
    })


})
/**
 * Get all server details 
 * @param {*} callback returns server list 
 */
function getServers(callback){
  
  var options = {
    "method": "GET",
    "hostname": "api.upcloud.com",
    "port": null,
    "path": "/1.2/server",
    "headers": {
      "authorization": base_auth,
      "accept": "application/json",
      "cache-control": "no-cache",
    }
  };
    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        let serverArray =  JSON.parse(body.toString())
        callback(serverArray.servers.server)
      });
    });

    req.end();


}
/**
 * Get server details
 * @param {server uuid} uuid 
 * @param {*} cb 
 */
function getServerDetail(uuid,cb){
        var options = {
          "method": "GET",
          "hostname": "api.upcloud.com",
          "port": null,
          "path": "/1.2/server/"+uuid,
          "headers": {
          "authorization": base_auth,
          "accept": "application/json",
          "cache-control": "no-cache",
          }
         };
         http.get(options, (res) => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
              body += data;
            });
            res.on("end", () => {
              body = JSON.parse(body);
              cb(body)
            });
        });
        // var req = http.request(options, function (res) {
        //   var chunks = [];

        //   res.on("data", function (chunk) {
        //     chunks.push(chunk);
        //   });

        //   res.on("end", function () {
        //     var body = Buffer.concat(chunks);
        //     console.log(body.toString());
        //   });
        // });
}
app.get('/getIpAddress', function(req,response) {
  console.log('req.body: ', req.body)

  var options = {
    "method": "GET",
    "hostname": "api.upcloud.com",
    "port": null,
    "path": "/1.2/ip_address",
    "headers": {
      "authorization": base_auth,
      "accept": "application/json",
      "cache-control": "no-cache",
    }
  };
    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
        response.send(body.toString())
      });
    });

    req.end();
})

//172.16.230.127
app.listen(9090, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:9090')
})