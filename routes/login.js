var express = require("express");
var router = express.Router();

const cognito = require("amazon-cognito-identity-js");

router.post("/", function (req, res) {
  var username = req.body.username;
  var passdata = req.body.password;

  console.log(username);
  console.log(passdata);

  if (!username | !passdata) {
    alert("Username or Password is Null.");
    return false;
  }

  // ユーザープールの設定
  var userpool = new cognito.CognitoUserPool({
    "UserPoolId": "ap-northeast-1_2rzkFPWjz",
    "ClientId": "5r42t6grvv6m8osclqk60khn9m"
  });

  // ユーザー設定
  const cognitoUser = new cognito.CognitoUser({
    "Username": username,
    "Pool": userpool
  });

  // 認証情報設定
  const authenticationDetails = new cognito.AuthenticationDetails({
    "Username": username,
    "Password": passdata
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (authresult) {
        const idToken = authresult.getIdToken().getJwtToken(); // IDトークン
        const accessToken = authresult.getAccessToken().getJwtToken(); // アクセストークン
        const refreshToken = authresult.getRefreshToken().getToken(); // 更新トークン

        console.log("idToken : " + idToken);
        console.log("accessToken : " + accessToken);
        console.log("refreshToken : " + refreshToken);

        // // セッション情報保持
        // sessionStorage.setItem("username", username);
        // console.log(sessionStorage.getItem("username"));

      // サインイン成功の場合、一旦trueを返す
      res.json("true");
    },
    onFailure: function (err) {
      res.json("false");
    },
  });
});

module.exports = router;
