"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createSign } = require('crypto');
function signMessage(privateKey, message) {
    const sign = createSign('SHA256');
    sign.update(message);
    sign.end();
    return sign.sign(privateKey, 'hex');
}
module.exports = {
    signMessage,
};
//# sourceMappingURL=index.js.map