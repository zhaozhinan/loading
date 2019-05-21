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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6b069e7dfc3c94b5fa8a11dbfd4badfe"
  },
  {
    "url": "assets/css/0.styles.43b70755.css",
    "revision": "9d33ee896f58766fc0ad7a70f0ecef37"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9b2e7370.js",
    "revision": "f27daba15b7c7f2f94b7d96149da7ebe"
  },
  {
    "url": "assets/js/3.02de907f.js",
    "revision": "5b021678856ae662c3fb24927d76cd4f"
  },
  {
    "url": "assets/js/4.f71a369c.js",
    "revision": "957092c8513d6d2bb7a23218191ae277"
  },
  {
    "url": "assets/js/5.b7ff157d.js",
    "revision": "b02fe4526494abd5f841299c37128136"
  },
  {
    "url": "assets/js/6.58189f0b.js",
    "revision": "e0e96cbb81e11160dfae79e17821dc84"
  },
  {
    "url": "assets/js/app.80592cf2.js",
    "revision": "fd8c0faf223e172aad42e643cf0080a1"
  },
  {
    "url": "index.html",
    "revision": "3f2e62f0858d33419198b017d8ef4b9a"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "pc/zh-cn.html",
    "revision": "9894ee88d07bb4b4c934156a2db1b8f2"
  },
  {
    "url": "wap/zh-cn.html",
    "revision": "eab353f88f3adc7bc679bf237d543302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
