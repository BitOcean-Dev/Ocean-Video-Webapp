const path = require('path');
const express = require('express');
const moment = require('moment');
const md5 = require('blueimp-md5');
const Base64 = require('crypto-js/enc-base64');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.get('/api/content', (req, res) => {
  res.json({
    'status': 'ok',
    'content': 'Ocean Video Api'
  });
});

app.get('/api/authToken/:id', (req, res) => {
  res.json({
    'status': 'ok',
    'token': generateToken(req.params.id)
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

const KEY = 'defaultpassword';

function generateToken(id) {
  let today = moment().format('M/D/YYYY h:m:s A');
  let validminutes = 1;
  let rawString = [id, KEY, today, validminutes].join('');
  let md5raw = md5(rawString, null, true);
  return id;
  /* TODO: implement folloing encription algorithm
p
   $today = gmdate("n/j/Y g:i:s A");
   $id = "6"; //TODO:replace according to authentication
   $key = "defaultpassword";
   $validminutes = 1;
   $str2hash = $id . $key . $today . $validminutes;
   $md5raw = md5($str2hash, true);
   $base64hash = base64_encode($md5raw);
   $urlsignature = "server_time=" . $today ."&hash_value=" . $base64hash. "&validminutes=$validminutes". '&id=' . $id; // check time zone if clock differs a lot
   $base64urlsignature = base64_encode($urlsignature);*/
}

app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});
