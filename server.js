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

app.get('/api/streamUrl/:id', (req, res) => {
  res.json({
    'status': 'ok',
    'url': playListUrl(generateToken(req.params.id))
  });
});

app.get('/api/video_list.php', (req, res) => {
  res.json({
    'status': 'ok',
    'data': [{
      vid: 1,
      name: 'bunny',
      price: 120,
      imageUrl: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg'
    }, {
      vid: 2,
      name: 'puppy',
      price: 121,
      imageUrl: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
    }, {
      vid: 3,
      name: 'cat',
      price: 10000,
      imageUrl: 'https://i.ytimg.com/vi/fSE00NLiYls/maxresdefault.jpg'
    }, {
      vid: 4,
      name: 'bunny2',
      price: 2020,
      imageUrl: 'https://www.peta2.com/wp-content/uploads/2013/12/two-bunnies.jpg'
    }, {
      vid: 5,
      name: 'bunny5',
      price: 2020,
      imageUrl: 'https://previews.123rf.com/images/djem/djem1209/djem120900063/15097404-Two-rabbits-bunny-isolated-on-white-background-Stock-Photo.jpg'
    }]
  })

})

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

const KEY = 'defaultpassword';

var playListUrl = (authToken) => `http://153.126.148.104:8081/demo/9784198810344-2.mp4/playlist.m3u8?wmsAuthSign=${authToken}`

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
