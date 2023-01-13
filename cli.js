const { Command } = require("commander");
const program = new Command();
async function run() {
  try {
    program
      .command("dev")
      .option("-d, --demo ", "run demo")
      .action(async () => {
        require("./vite.js").startViteServer();
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  await program.parseAsync(process.argv);
}
module.exports = {
  run,
};
