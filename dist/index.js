"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("./constants");
var WhatsappMessage = /** @class */ (function () {
    function WhatsappMessage(phone_number_id) {
        this.url = constants_1.ENDPOINT.replace("$phone_number_id", phone_number_id).replace("$token", process.env.ACCESS_TOKEN);
    }
    WhatsappMessage.prototype.sendMessage = function (to, message) {
        this.to = to;
        this.type = message.type;
        this.message = message[message.type];
        this.send();
    };
    WhatsappMessage.prototype.send = function () {
        var _a;
        var data = (_a = {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: this.to,
                type: this.type
            },
            _a[this.type] = this.message,
            _a);
        try {
            (0, axios_1.default)({
                method: "POST",
                url: this.url,
                data: data,
                headers: { "Content-Type": "application/json" },
            });
        }
        catch (error) {
            console.log("🚀 ~ file: index.ts ~ line 124 ~ WhatsappMessage ~ send ~ error", error);
        }
    };
    return WhatsappMessage;
}());
exports.default = WhatsappMessage;
//# sourceMappingURL=index.js.map