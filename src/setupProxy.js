const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://invest-public-api.tinkoff.ru/",
      changeOrigin: true,
      secure: false,
      logLevel: "debug",
      pathRewrite: { "^/api": "/rest" },
      logProvider(provider) {
        return console;
      },
    })
  );
};
