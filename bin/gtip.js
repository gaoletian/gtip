#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const home = process.env.HOME;
const gitalias = path.resolve(home, '.oh-my-zsh/plugins/git/git.plugin.zsh');

// 终端宽度
const termWidth = process.stdout.columns;
// file content
const content = fs.readFileSync(gitalias, { encoding: 'utf8' });

const args = process.argv.slice(2);
const opt = Object.fromEntries(args.filter((arg) => arg.startsWith('-')).map((key) => [key.slice(1), true]));
const param = args.filter((arg) => !arg.startsWith('-'));

// 找到所有以 alias 开头的行
let aliases = content.match(/alias.*/g);

const colW1 = termWidth;

function main() {
  // 有中文说明的行 会包含 #
  aliases = aliases.map((el) => {
    // prettier-ignore
    return el.indexOf("#") > -1
      ? el.replace(/alias (.*?)=['"](.*?)['"]\s*#\s*(.*)/g, "$1##$3##$2").split("##")
      : el.replace(/alias (.*?)=['"](.*?)['"]\s*/g, "$1##$2").split("##");
  });

  const markTableSplitor = opt.t ? '| ' : '';

  let res = aliases.map((it) => {
    let t0 = markTableSplitor + column(it[0], 16);
    let t1 = markTableSplitor + column(it[1], 48);
    let t2 = markTableSplitor + (it[2] || '') + markTableSplitor;

    // 没有中文说明的情况
    if (it.length === 2) return column(t0, 16) + t1 + t2;
    // 有中文说明的情况
    if (it.length === 3) {
      if (width(t0 + t1 + t2) < termWidth) {
        return [t0, t1, t2].join('');
      }

      if (width(t0 + t1) <= termWidth) {
        return [t0, t1].join('');
      }
    }
    return '';
  });
  return res;
}

/**
 * 计算宽度
 * @param str {String}
 * @param width {Number}
 */
function column(str, colWidth) {
  let _str = str.trim().trimRight().trimLeft();
  const strWidth = width(_str);
  return _str + ''.padEnd(colWidth - strWidth, ' ');
}

function width(str) {
  // 宽字符
  let wide = str.match(/[\u4e00-\u9fa5]/g);
  // 非宽字符
  let narrow = str.match(/[^\u4e00-\u9fa5]/g);
  wideWidth = wide ? wide.length * 2 : 0;
  narrowWidth = narrow ? narrow.length : 0;
  return wideWidth + narrowWidth;
}

const colors = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
  fg: {
    Black: '\x1b[30m',
    Red: '\x1b[31m',
    Green: '\x1b[32m',
    Yellow: '\x1b[33m',
    Blue: '\x1b[34m',
    Magenta: '\x1b[35m',
    Cyan: '\x1b[36m',
    White: '\x1b[37m',
    Crimson: '\x1b[38m', //القرمزي
  },
  bg: {
    Black: '\x1b[40m',
    Red: '\x1b[41m',
    Green: '\x1b[42m',
    Yellow: '\x1b[43m',
    Blue: '\x1b[44m',
    Magenta: '\x1b[45m',
    Cyan: '\x1b[46m',
    White: '\x1b[47m',
    Crimson: '\x1b[48m',
  },
};

const hightlight = (str) => colors.Bright + colors.fg.Yellow + str + colors.Reset;

if (param[0] && param[0].length) {
  console.log(
    '\n' +
      main()
        .filter((el) => el.indexOf(param[0]) > -1)
        .map((line) => line.replace(new RegExp(param[0], 'gi'), hightlight(param[0])))
        .join('\n') +
      '\n'
  );
} else {
  console.log('\n' + main().join('\n') + '\n');
}
