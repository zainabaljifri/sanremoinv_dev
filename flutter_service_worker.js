'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "200318ca2b7211149038927ceccad4bd",
"assets/Assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/Assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/Assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/Assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/Assets/Images/accounting.png": "1c3c8c056e82fccdecf00599570c00bf",
"assets/Assets/Images/accounting_tickets.jpg": "aae1cc83b81bb9eeedd22c3fe28a3faa",
"assets/Assets/Images/assigned.png": "95a232dadd265012e3e24db21b82fd51",
"assets/Assets/Images/assigned_tickets.jpg": "639ea91611a090e792a188a021766d48",
"assets/Assets/Images/awaiting%2520curioer.jpg": "2584876e356d915b7a8e66c0318e2393",
"assets/Assets/Images/BatchBrewer.PNG": "2e1b94b1bd2f54fe3529400c7e24478c",
"assets/Assets/Images/beans.png": "b184dd7eb4b403c0ffffdfca2056de66",
"assets/Assets/Images/ceado.png": "be1befcf3fa29a4e9979044250faa681",
"assets/Assets/Images/clients_tickets.jpg": "1970b7fdaa5d6272f05724be2bcbbdc6",
"assets/Assets/Images/closed.jpg": "62db9338e050842fe28352b58dee06ff",
"assets/Assets/Images/COFFEbEANS.png": "fee1f977641c606d5b6e383f4e29ce53",
"assets/Assets/Images/customer_comp.jpg": "59e90e1e5d25873be797d26a3919234b",
"assets/Assets/Images/delivery.png": "1451d535ed530c34d405395f35819037",
"assets/Assets/Images/delivery_visit.jpg": "beb7de692bbf567c2e8332082629e45d",
"assets/Assets/Images/Espresso.jpg": "319c77acbb5ec7c5c8c3b73531c61ec4",
"assets/Assets/Images/exchange.png": "c4ee7ee8b08c18d99353971a386563d1",
"assets/Assets/Images/exchange_tickets.jpg": "51ff3ff19758b37ef079f5638d359240",
"assets/Assets/Images/Grinder.jpg": "0f3ca4b4805597aa8d0c15042d7ec85f",
"assets/Assets/Images/inTransit.jpg": "d3972c5256935bc8874c3a53fb869599",
"assets/Assets/Images/location.png": "27f3e574707b83aee89e79b6421e0242",
"assets/Assets/Images/machine.png": "643269f20314fa3fb71d10f84365e331",
"assets/Assets/Images/management.png": "ae7ea2597082c17455cef17d3be573ee",
"assets/Assets/Images/open_tickets.jpg": "8946e20f170c698daa369efbb7e3bc31",
"assets/Assets/Images/open_tickets.png": "4a4aec4f64062f186abe319ced22ae71",
"assets/Assets/Images/pending_tickets.jpg": "81a883a32761a748086cc6998aa409be",
"assets/Assets/Images/PerfectMoose.jpg": "5e8b09268b789f6543031473d5681e53",
"assets/Assets/Images/pickup.png": "6b5824100001287573e3195551e1bf61",
"assets/Assets/Images/pickup_tickets.jpg": "ebf9b91a6d50bb70577c706a2d096fff",
"assets/Assets/Images/pm.png": "2df293d355c1157290b13f081e6ef641",
"assets/Assets/Images/queue.png": "c418e7990514cecbe1d0fddf2023f326",
"assets/Assets/Images/queued_tickets.jpg": "a62453fbf7e98c086ea00bf9317edaf9",
"assets/Assets/Images/ready.png": "cde2bd9723588df382799b330d00ca7d",
"assets/Assets/Images/ready_tickets.jpg": "88b832be722607f27c7f62d0a04f9879",
"assets/Assets/Images/rejected.jpg": "6c564835039bdcdaaa418d97fea62708",
"assets/Assets/Images/review.jpg": "0d84bbfbb1b0fa54342b56ed9fd8f6fe",
"assets/Assets/Images/rfa_logo.png": "23bf75f210538182913309cda768e5b5",
"assets/Assets/Images/rfa_logo_horizontal.png": "9b9880fb4756968ed3ce84773c3258cd",
"assets/Assets/Images/rfa_new_logo.png": "dae384105c6b88e4b979aaa6bd01ae06",
"assets/Assets/Images/sanremo.png": "66c50e3a71d8a4dda9cb970860b98fb0",
"assets/Assets/Images/sipresso.png": "1fce7aecc946746fb7744b6853855543",
"assets/Assets/Images/site_visit.jpg": "ce79251dd5a0028336c774936f6f29f1",
"assets/Assets/Images/Tampers.jpg": "56b979226affe8aabb1f1ef73d5dd5c1",
"assets/Assets/Images/technician.png": "9535e2edad4c500b5b5c9753b9855837",
"assets/Assets/Images/waiting.jpeg": "998e78731a995c2d351c086b7150621e",
"assets/Assets/Images/waiting.png": "d1b1e4a9046462162878c5d7cbe2413a",
"assets/Assets/Images/waitingPayment.jpg": "a13af8d6c10fb6400aa08dd58ad47d38",
"assets/Assets/Images/web_backgroun.png": "645d6180112103f9699603bfbf9252fe",
"assets/Assets/Images/workshop.png": "65e7dd51334bcdae8134ece3b934d108",
"assets/Assets/Images/workshop_tickets.png": "a17a1c1fa39391d2cd1e655602974bff",
"assets/FontManifest.json": "9a3fd6a92cf0e1b10b47b01497f8f312",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/Languages/ar.json": "11e530b6a573c209d0a8714930009f27",
"assets/Languages/en.json": "f3d6f03e041d043a1a6698bd2a36d4e3",
"assets/NOTICES": "2074fd312e4a9be6ea86c6669b75f08d",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/Repo/cities.json": "3711004e3ac750262bc781f4806cc809",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06034628010f8f52a93603b1aac93db5",
"/": "06034628010f8f52a93603b1aac93db5",
"main.dart.js": "7542075299fa80b68de9970fc055c871",
"manifest.json": "3f92a849556967510ecd50602f08bc15",
"version.json": "5e129f52952a920d64681e367187e4ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
