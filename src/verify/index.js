"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createVerify } = require('crypto');
function verifyMessage(publicKey, message, signature) {
    const verify = createVerify('SHA256');
    verify.update(message);
    verify.end();
    return verify.verify(publicKey, signature, 'hex');
}
module.exports = {
    verifyMessage,
};
//# sourceMappingURL=index.js.map