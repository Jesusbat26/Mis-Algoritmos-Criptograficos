const fs = require('fs');
const crypto = require('crypto');

function verifyMessage(publicKeyPath: string, message: string, signature: string) {
  const publicKeyPem = fs.readFileSync(publicKeyPath, 'utf8');

  const verify = crypto.createVerify('SHA256');
  verify.update(message);
  verify.end();

  return verify.verify(publicKeyPem, signature, 'hex');
}

module.exports = {
  verifyMessage,
};