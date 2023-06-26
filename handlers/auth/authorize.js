const conf = require('../../conf/config');
const openidIssuer = require('./openidIssuer');

module.exports = async function authorize(req, res) {
  try {
    const client = await openidIssuer.getOpenidClient();
    const callbackUrl = conf.auth.redirect_uris[req.query.redirectUrl];
	  if(callbackUrl) {		
      const authorizationUrl = client.authorizationUrl({
      redirect_uri: callbackUrl,
      response_type: 'code',
      scope: 'openid origo',
      state: (req.query.state !== null && req.query.state !== undefined) ? req.query.state : 'just-in'
    });
    res.redirect(authorizationUrl);
    } else {
    res.status(500).send('authorize error');
    }
    } catch (e) {
    console.error(e.toString());
    res.status(500).send('authorize error');
  }
};