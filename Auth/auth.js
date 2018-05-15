import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "lucaslagrimante.auth0.com",
    clientID: "pQenc00uW4PDQpnVv497jyBjURyNyWxU",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://lucaslagrimante.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
