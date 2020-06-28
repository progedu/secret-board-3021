'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      if (req.method === 'PUT') {
        util.handleBadRequest(req, res);
        break;
      }
      postsHandler.handle(req, res);
      break;
    case '/logout':
      // TODO ログアウト処理
      util.handleLogout(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};