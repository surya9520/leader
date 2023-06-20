const withLess = require("next-with-less");
// const withPWA = require("next-pwa");

// const nextPWAConfig = withPWA({
//   reactStrictMode: true,
//   target: "serverless",
//   pwa: {
//     dest: "public",
//     // swSrc: SW,
//     disable: process.env.NODE_ENV === "development",
//   },
// });

const nextLessConfig = withLess({
  lessLoaderOptions: {
    lessOptions: {
      strictMath: true,
      strictUnits: true,
    },
  },
});

module.exports = {
  // reactStrictMode: true,
  // ...nextPWAConfig,
  ...nextLessConfig,
  images: {
    domains: [
      "placementium68c4f5426e3f401a973d2e6df6e87d56224554-dev.s3.ap-south-1.amazonaws.com/",
    ],
  },
};