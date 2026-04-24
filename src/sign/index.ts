const fs = require('fs');
const crypto = require('crypto');

function signMessage(privateKeyPath: string, message: string) {
  const privateKeyPem = fs.readFileSync(privateKeyPath, 'utf8');

  // 🔥 ESTA ES LA CLAVE DEL FIX
  const privateKey = crypto.createPrivateKey({
    key: privateKeyPem,
    format: 'pem',
  });

  const sign = crypto.createSign('SHA256');
  sign.update(message);
  sign.end();

  return sign.sign(privateKey, 'hex');
}

module.exports = {
  signMessage,
};