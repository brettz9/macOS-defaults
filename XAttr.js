const Spawn = require('./Spawn.js');

const bplist = require('../node-bplist-parser');

class XAttr extends Spawn {
  // Todo: Make a genuine parser
  static async parseXAttr (str) {
    // Todo: Change to get buffer
    console.log('aaa', await bplist.parseFile(Buffer.from(str, 'utf8')));
    return await bplist.parseFile(Buffer.from(str, 'utf8'));
  }
  spawn (opts, ...args) {
    return super.spawn(Object.assign({cmd: 'xattr'}, opts), ...args);
  }

  spawnAsync (opts, ...args) {
    return super.spawnAsync(Object.assign({cmd: 'xattr'}, opts), ...args);
  }

  spawnSync (opts, ...args) {
    return super.spawnSync(Object.assign({cmd: 'xattr'}, opts), ...args);
  }
}

module.exports = XAttr;
