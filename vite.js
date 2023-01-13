const vue = require("@vitejs/plugin-vue");
const path = require("path");
const vite = require("vite");
const viteConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

async function startViteServer() {
  const server = await vite.createServer({
    ...viteConfig,
    configFile: false,
  });
  await server.listen(8080);
  server.printUrls();
}
module.exports = {
  startViteServer,
};
