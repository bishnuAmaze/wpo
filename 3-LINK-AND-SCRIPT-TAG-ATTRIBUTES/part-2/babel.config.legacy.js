module.exports = (api) => {
    api && api.cache(false);
    const presets = [
      [
        "@babel/preset-env",
        {
          targets: { browsers: ["safari >= 7"] },
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
  