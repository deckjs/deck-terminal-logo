var chalk = require('chalk');

function s(n) {
  return Array.apply(null, {length: n}).join(' ');
}

function logo(opts) {
  opts = (opts) ? opts : {}
  opts.leftPadding = typeof opts.leftPadding === 'number'
    ? opts.leftPadding
    : (process.stdout.columns / 2) - 4;
  opts.text = (opts.text) ? opts.text : '';

  return              "\n"+
    chalk.gray ("\n"+s(opts.leftPadding)+" ###############") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###############") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###############") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#################") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("################") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("################") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("####") + chalk.gray("#####") + chalk.white("#######") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("####") + chalk.gray("#") + chalk.white("####") + chalk.gray("##") + chalk.white("#####") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("####") + chalk.gray("#") + chalk.white("#####") + chalk.gray("##") + chalk.white("####") + chalk.gray("#    ") + chalk.cyan(opts.text) +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.cyan("###") + chalk.gray("#") + chalk.white("####") + chalk.gray("#") + chalk.white("####") + chalk.gray("##") + chalk.white("#####") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"#") + chalk.gray("#############") + chalk.white("#######") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"    ") + chalk.gray("#") + chalk.white("################") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"    ") + chalk.gray("#") + chalk.white("###############") + chalk.gray("#") +
    chalk.gray ("\n"+s(opts.leftPadding)+"    ") + chalk.gray("#") + chalk.gray("##############") + chalk.gray("#") +
    "\n\n";
}

logo.toTTY = function (opts) {
  return process.stdout.write(logo(opts));
}

module.exports = logo.toTTY({text: "DECK"});
