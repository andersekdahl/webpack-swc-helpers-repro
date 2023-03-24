## Repro of issue with @swc/helpers getting removed from webpack bundle

This repo contains a reproducable of how `@swc/helpers` are getting removed from the final production bundle when mixing ESM and CJS code.

### How to run:

```
$ npm install
$ npx webpack --mode production
```

Then open `dist/main.js`, prettify it to make it readable. The code looks something like this:

```js
var e = {
      915: (e, r, o) => {
        var n = o(835).class_call_check,
          t = o(835).create_class,
          a = (function () {
            "use strict";
            function e() {
              n(this, e);
            }
            return t(e, [{ key: "method", value: function () {} }]), e;
          })();
        console.log(a), (e.exports = "commonjs");
      },
      835: () => {},
    },
```

In this code, module id `835` represents `@swc/helpers` and as you can see, the function for it is empty and removed by the tree shaking process.
