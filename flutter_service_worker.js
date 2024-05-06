'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "02afc400f37de64dfea8dc341fccd28f",
"assets/Assets/Gifs/archive.gif": "9cc63f72ac8f5d18fa69b04dcc16eec2",
"assets/Assets/Gifs/success.gif": "35f323bc5b41dc4269001529e3ff1278",
"assets/Assets/Icons/customerQueue.png": "b1f1a8821237ce7b16caad0b5446cdff",
"assets/Assets/Icons/delivery.png": "5d3fd2726afce98f4d6f2a568fa35b6c",
"assets/Assets/Icons/fail.png": "ea67c418ea11965905251550a477c5ac",
"assets/Assets/Icons/failed.png": "b9477c1b7547e845f112efe88d8514d9",
"assets/Assets/Icons/failedInv.png": "4b6f6ad994dd8ec8d02ff44c147fc9e4",
"assets/Assets/Icons/InProgress.png": "829f50172de423c1527d2548c2210143",
"assets/Assets/Icons/Out.png": "302ec5a9b2e779da22dcbf7d9e029c36",
"assets/Assets/Icons/pass.png": "bdd6184f24b09687e027eaf8bd28eb52",
"assets/Assets/Icons/qualityControl.png": "6316922548c078f66b231974990e96ef",
"assets/Assets/Icons/Queue.png": "c3b1ad4ad67efe150ee25ec94eca8d8b",
"assets/Assets/Icons/ready-stock.png": "7bc1ca1ed2140f2c9d7c4665d81e3955",
"assets/Assets/Icons/rent.png": "c6983af80b5a607dd7428b55acfcf024",
"assets/Assets/Icons/Rep.png": "dbcd43acf55a5c15770fc5eedb0e1cd7",
"assets/Assets/Icons/request_machine.png": "1c9668e189730588c2815236f996b59a",
"assets/Assets/Icons/spareParts.png": "8c14c979cf11b53a6b56805b54253176",
"assets/Assets/Icons/Submitted.png": "36064649634960dc6edc6d59f01d5228",
"assets/Assets/Icons/TestMachine.png": "40145bdba94cf71fc982987c32464d45",
"assets/Assets/Icons/Waiting.png": "4c15a9b76fb269e21b445715a80a78ab",
"assets/Assets/Icons/WaitingSO.png": "feabbb166d10d24fd6d432ec9e1ab09e",
"assets/Assets/Icons/workshop_use.png": "14d8d965d81afac5efd0b8fd6558f022",
"assets/Assets/Icons/ws_test.png": "b08e54d870bbb0468752e0ab2b41058c",
"assets/Assets/Images/logo.png": "239ce1a9bc695a6fdb589c1adab0b101",
"assets/Assets/Images/machine.png": "a580989854f944bd37480b627e4afda9",
"assets/Assets/Images/undraw_pilates_gpdb.png": "1b1ed996588a09e87c5ff451d1e6bcb0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/Languages/ar.json": "806b82b738a9803c0f114cab3d03a3a7",
"assets/lib/Languages/en.json": "70a7ddac2a3d9208f9c73e4a019787fa",
"assets/NOTICES": "8ce525372ca5e3f9c84e379a2f56cd5b",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "532f85d326ae1b642542c00bdc89057a",
"/": "532f85d326ae1b642542c00bdc89057a",
"main.dart.js": "1db2c4e417774f6f2d1025b841714350",
"manifest.json": "9de2563b5eecc9e76b1b8e0b2b15fa71",
"version.json": "5a170ff0b617448d6fdac57283941f31"
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
