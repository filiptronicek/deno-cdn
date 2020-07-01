// @ts-nocheck
const routes = require('./routes');
module.exports = (req, res) => {
    let it = 0;
  for (const route of routes) {
      console.log(route);
    if (routes[it][0].path === req.query.s) {
      res.writeHead(302, {
        Location: routes[it][1].url,
        //add other headers here...
      });
      res.end();
      break;
    }
    it ++;
  }
};
