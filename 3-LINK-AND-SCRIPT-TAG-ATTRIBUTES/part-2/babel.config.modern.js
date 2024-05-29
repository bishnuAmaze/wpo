module.exports = (api) => {
  api && api.cache(false);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: { esmodules: true }, //For ES6 supporting browsers
        useBuiltIns: "usage",
        corejs: 2,
        modules: false,
      },
    ],
    "@babel/preset-react",
  ];
  return {
    presets,
  };
};
