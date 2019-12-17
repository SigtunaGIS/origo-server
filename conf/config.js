module.exports = {
  mapState: {
    'storagePath': 'OrigoMapState' // Path to map state storage. Current path will save map state to a folder named OrigoMapState in the origo-server directory.
  },
  getInskrivning: {
    url: 'https://services.lantmateriet.se/distribution/produkter/inskrivning/v2.1',
    user: 'xxxxx',
    password: 'xxxxx'
  },
  getAkt: {
    consumer_key: '',
    consumer_secret: '',
    scope: ''
  },
  proxy: {
    proxyUrl: 'proxy?url='
  },
  'lmproxy-ver': {
    url: "http://maps-ver.lantmateriet.se/",
    auth: {
      user: 'xxxxx',
      pass: 'xxxxx'
    }
  },
  lmproxy: {
    url: "http://maps.lantmateriet.se/",
    auth: {
      user: 'xxxxx',
      pass: 'xxxxx'
    }
  },
  lmelevation: {
    url: "https://services.lantmateriet.se/distribution/produkter/hojd/v1/rest/api",
    auth: {
      user: 'xxxxx',
      pass: 'xxxxx'
    }
  },
  lmsearchplacename: {
    url: "http://namespace.lantmateriet.se/distribution/products/placename/v1/placename-1.1.wsdl",
    auth: {
      user: 'xxxxx',
      pass: 'xxxxx'
    }
  },
  lmsearchestate: {
    url: "https://api.lantmateriet.se/distribution/produkter/registerbeteckning/v4/",
    url_token: "https://api.lantmateriet.se/token",
    consumer_key: 'xxxxx',
    consumer_secret: 'xxxxx',
    scope: 'am_application_scope default'
  },
  lmsearchaddress: {
    url: "https://api.lantmateriet.se/distribution/produkter/belagenhetsadress/v4.1/",
    url_token: "https://api.lantmateriet.se/token",
    consumer_key: 'xxxxx',
    consumer_secret: 'xxxxx',
    scope: 'am_application_scope default'
  }
}
