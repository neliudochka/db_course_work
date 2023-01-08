/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "341db38156303dfc4509738b1f531074"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.cdcd139b.css",
    "revision": "68950cae86c61c120c3b4121d170495d"
  },
  {
    "url": "assets/img/add_no_body.358f85ca.png",
    "revision": "358f85ca9ae50f6a3a1c87000532055f"
  },
  {
    "url": "assets/img/add_ok.1e4595ae.png",
    "revision": "1e4595aea29ba57ff9f0ecdb778412d1"
  },
  {
    "url": "assets/img/add_same.f315a2c0.png",
    "revision": "f315a2c0e6547826929872d645621f86"
  },
  {
    "url": "assets/img/Agile-model1.d7cea002.jpg",
    "revision": "d7cea002c29bd7b3520e9ee4b29fd9ae"
  },
  {
    "url": "assets/img/delete_ok.3c8e6fdf.png",
    "revision": "3c8e6fdfd4f4c1f833443dd2404c89b0"
  },
  {
    "url": "assets/img/delete_ok.4d04b3cd.png",
    "revision": "4d04b3cd97d7d6ef5d6a4d055c38f080"
  },
  {
    "url": "assets/img/delete_ok.79e4fbda.png",
    "revision": "79e4fbdad2e8548c01308e31a239a576"
  },
  {
    "url": "assets/img/delete_same.305954ec.png",
    "revision": "305954ecfe21381bfd9e595aff1323f8"
  },
  {
    "url": "assets/img/delete_same.c803c83a.png",
    "revision": "c803c83a791085b2b8fc5475ab1ca3db"
  },
  {
    "url": "assets/img/delete_same.dc17d772.png",
    "revision": "dc17d7723f16e9ff32f19c3f31e73e23"
  },
  {
    "url": "assets/img/get_all.5c1930ed.jpg",
    "revision": "5c1930edf34dedf4e498996db193310f"
  },
  {
    "url": "assets/img/get_all.7163de7b.jpg",
    "revision": "7163de7bc2ddf09921ba379b2b6d1ceb"
  },
  {
    "url": "assets/img/get_all.a55e66fa.jpg",
    "revision": "a55e66faa2af7f557658dbd1723f72ff"
  },
  {
    "url": "assets/img/get_by_id_long.43f45da6.png",
    "revision": "43f45da6862f18893158830936636434"
  },
  {
    "url": "assets/img/get_by_id.2cd724bd.png",
    "revision": "2cd724bdc59916c1f3c9391c97078490"
  },
  {
    "url": "assets/img/get_by_id.5d41b0e1.png",
    "revision": "5d41b0e14be16a5e9329c928c4dbbc30"
  },
  {
    "url": "assets/img/get_with_id.5016d3d7.png",
    "revision": "5016d3d72e0dc5ebde12300f2a2947f3"
  },
  {
    "url": "assets/img/incremental_model.f5d9e8fb.jpg",
    "revision": "f5d9e8fb91535b6d3c0ea1fabfff8de3"
  },
  {
    "url": "assets/img/iteration_model.e0a0d503.png",
    "revision": "e0a0d503d526275a965b85712a403de8"
  },
  {
    "url": "assets/img/kanban.b72f5f24.png",
    "revision": "b72f5f24fff0c7c164d7fd9c58239efd"
  },
  {
    "url": "assets/img/post_existed.f31f01dd.png",
    "revision": "f31f01dd4ddbd37cd977933055329fa2"
  },
  {
    "url": "assets/img/post_no_body.dfccc7fb.png",
    "revision": "dfccc7fbab3361b160e8cbd8a6971fb9"
  },
  {
    "url": "assets/img/post_no_grant.f0ebd1cd.png",
    "revision": "f0ebd1cd600f669d6a450808d7988010"
  },
  {
    "url": "assets/img/post_no_role.f95ab09b.png",
    "revision": "f95ab09b21c4095c5bf9d3b1de38056f"
  },
  {
    "url": "assets/img/post_ok.6e4d103b.png",
    "revision": "6e4d103be531460ba1ba532250109363"
  },
  {
    "url": "assets/img/post_ok.f41bb877.png",
    "revision": "f41bb877dbf342d2681b2f9ad8773a18"
  },
  {
    "url": "assets/img/post_same.543aeb1d.png",
    "revision": "543aeb1d528ca16ebee7fef9d4fa3b28"
  },
  {
    "url": "assets/img/post_without_body.429c053b.png",
    "revision": "429c053b57eaca6508d0659bccd2178f"
  },
  {
    "url": "assets/img/rup.7215ce47.png",
    "revision": "7215ce47c8b371b4efe2dd0229a203da"
  },
  {
    "url": "assets/img/sceme.4c43a144.png",
    "revision": "4c43a1442c9af499a43b753271d55083"
  },
  {
    "url": "assets/img/Scrum1.6cf6e799.jpg",
    "revision": "6cf6e7992ae0a26347624ec09b471af1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Spiral-model.ff8b53fb.jpg",
    "revision": "ff8b53fb3a68d45d8d41595446121981"
  },
  {
    "url": "assets/img/V-model-1.f7c326d5.jpg",
    "revision": "f7c326d533c04a8c5c68e1344c6ed759"
  },
  {
    "url": "assets/img/Waterfall-model.370b6011.jpg",
    "revision": "370b60114ad9a205c274b630c92f2bab"
  },
  {
    "url": "assets/js/10.31c9f631.js",
    "revision": "720d3383ff07fe85ef05663fa00d38ff"
  },
  {
    "url": "assets/js/11.1b57158d.js",
    "revision": "0ed3ebea614b317498708220384aa688"
  },
  {
    "url": "assets/js/12.f6b79c19.js",
    "revision": "d1488b06ed7e5cc5a8f6d6796e4f5de6"
  },
  {
    "url": "assets/js/13.ea16f094.js",
    "revision": "920e49f136695ac8a3794de2b2f98130"
  },
  {
    "url": "assets/js/14.c7658bbb.js",
    "revision": "9a962f24a79ea731f16a2298494258f9"
  },
  {
    "url": "assets/js/15.b29e106c.js",
    "revision": "62b472e23ca095215c07eaddea54291f"
  },
  {
    "url": "assets/js/16.414c5314.js",
    "revision": "c39d7bc6f7512fa51118ff70dbcab08d"
  },
  {
    "url": "assets/js/17.be80f378.js",
    "revision": "a3a3bb96409cd246c99a5f04a2451323"
  },
  {
    "url": "assets/js/18.a667fb8c.js",
    "revision": "a78e80ab31571d60aa9b49eda923ca50"
  },
  {
    "url": "assets/js/19.93e2c41c.js",
    "revision": "beb6e06656e25b7c5f8af1e40141b046"
  },
  {
    "url": "assets/js/2.1147d66a.js",
    "revision": "dee989c03c62f3ae13e8b8f819392056"
  },
  {
    "url": "assets/js/20.d26401db.js",
    "revision": "7b649790737c5fc1b2cd2fdff3f3243e"
  },
  {
    "url": "assets/js/21.3dd3eee9.js",
    "revision": "a7d9cc31df465586c26ab35f13ddae9c"
  },
  {
    "url": "assets/js/22.11c9f218.js",
    "revision": "41fa9aad3d308f0795b56bdb284131e6"
  },
  {
    "url": "assets/js/23.d4702b19.js",
    "revision": "ee5d009f6964181ea8950fc7126ac7bf"
  },
  {
    "url": "assets/js/24.323aec7e.js",
    "revision": "7f4d2b00d1d3335bb8c3026926a0ed4d"
  },
  {
    "url": "assets/js/26.bc5643e2.js",
    "revision": "f6ef600cbc910f8e1c2bf6f6ab57857c"
  },
  {
    "url": "assets/js/3.d3637f35.js",
    "revision": "937859083ea13da2fee3cda322b1aaa1"
  },
  {
    "url": "assets/js/4.5c707a93.js",
    "revision": "be1a7a1f8c94dfe5ccba64cc22a2e3a8"
  },
  {
    "url": "assets/js/5.ce334f0d.js",
    "revision": "f6cc58c7fe8f8f07ffd589456de66587"
  },
  {
    "url": "assets/js/6.97f5faad.js",
    "revision": "12fe0cbdc6ffd453db13ff269bfa8508"
  },
  {
    "url": "assets/js/7.08df2101.js",
    "revision": "7b2744b4db4e699f189b412104a6c116"
  },
  {
    "url": "assets/js/8.753ec9b1.js",
    "revision": "c1193cc969ea92da63c574025ffc92d5"
  },
  {
    "url": "assets/js/9.9a830b4a.js",
    "revision": "ebee63820db261f68733ab294f12472c"
  },
  {
    "url": "assets/js/app.e0fcaa6b.js",
    "revision": "074fcb84567efd3b021cb194a7c637fe"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1b3075a9a876d56ecbf3ea6770dda512"
  },
  {
    "url": "design/index.html",
    "revision": "30a8ad79b4ee7cb86a8463a4d5c8024f"
  },
  {
    "url": "index.html",
    "revision": "6ead00ea5d8e80503202daa405b4882a"
  },
  {
    "url": "intro/index.html",
    "revision": "ff1058cfb3b22903a99afa38e0035749"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1a871a396277f0c02abec7762bdbe017"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "abf92b1724eba6666336bee49f9ca9a6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "969c48bd0c6897b6a85dd579d587b717"
  },
  {
    "url": "software/index.html",
    "revision": "9282abf364d29da096ab37f3d7ce208a"
  },
  {
    "url": "test/index.html",
    "revision": "755f07a61c5d821a5e5f0484a52cf600"
  },
  {
    "url": "use cases/index.html",
    "revision": "74f659109f630e4d0c0310fc04392664"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
