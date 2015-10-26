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
  '\n' + s(opts.leftPadding) + chalk.gray(' ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('ĐĐĐĐĐ') + chalk.white('ĐĐĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('ĐĐ') + chalk.white('ĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐĐ') + chalk.gray('ĐĐ') + chalk.white('ĐĐĐĐ') + chalk.gray('Đ    ') + chalk.white(opts.text) +
  '\n' + s(opts.leftPadding) + chalk.gray('Đ') + chalk.black('ĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('Đ') + chalk.white('ĐĐĐĐ') + chalk.gray('ĐĐ') + chalk.white('ĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('ĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') + chalk.white('ĐĐĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('    Đ') + chalk.white('ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') + chalk.gray('Đ') +
  '\n' + s(opts.leftPadding) + chalk.gray('    ĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐĐ') +
  '\n\n'
}

logo.toTTY = function (opts) {
  return process.stdout.write(logo(opts))
}

module.exports = logo
