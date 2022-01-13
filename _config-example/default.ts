export default {
  port: 3001,
  host: "localhost",
  dburi:
    "mongodb+srv://<DATABASE>:<PASSWORD>@<DATABASE>.rsodl.mongodb.net/<DATABASE>?retryWrites=true&w=majority",
  saltWorkFactor: 5,
  accessTokenTtl: "45m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  -----END RSA PRIVATE KEY-----`,
};
