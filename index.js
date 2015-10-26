var chalk = require('chalk')

function s (n) {
  return Array.apply(null, {length: n}).join(' ')
}

function logo (opts) {
  opts = opts || {}
  opts.leftPadding = typeof opts.leftPadding === 'number'
    ? opts.leftPadding
    : (process.stdout.columns / 2) - 4
  opts.text = (opts.text) ? opts.text : ''

  return '\n' +
  '\n' + s(opts.leftPadding) + chalk.white.dim(' ###############') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###############') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###############') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#################') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('################') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('################') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('#####') + chalk.white('#######') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('##') + chalk.white('#####') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('#') + chalk.white('#####') + chalk.white.dim('##') + chalk.white('####') + chalk.white.dim('#    ') + chalk.gray(opts.text) +
  '\n' + s(opts.leftPadding) + chalk.white.dim('#') + chalk.gray('###') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('#') + chalk.white('####') + chalk.white.dim('##') + chalk.white('#####') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('##############') + chalk.white('#######') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('    #') + chalk.white('################') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('    #') + chalk.white('###############') + chalk.white.dim('#') +
  '\n' + s(opts.leftPadding) + chalk.white.dim('    ################') +
  '\n\n'
}

logo.toTTY = function (opts) {
  return process.stdout.write(logo(opts))
}

module.exports = logo
