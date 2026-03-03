"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var better_auth_1 = require("better-auth");
var prisma_1 = require("better-auth/adapters/prisma");
var nodemailer_1 = require("nodemailer");
var prisma_2 = require("./prisma");
// Nodemailer setup
var transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "mahmoodapurbo1@gmail.com",
        pass: "trjt ogte eiod iovy",
    },
});
// Email template
function verificationEmailTemplate(_a) {
    var userEmail = _a.userEmail, verificationUrl = _a.verificationUrl, token = _a.token, userName = _a.userName;
    return "\n    <h1>Hello ".concat(userName, "</h1>\n    <p>Please verify your email:</p>\n    <a href=\"").concat(verificationUrl, "\">Verify Email</a>\n    <p>Token: ").concat(token, "</p>\n  ");
}
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma_2.prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
            var user = _b.user, url = _b.url, token = _b.token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, transporter.sendMail({
                            from: '"Maddison Foo Koch" <mahmoodapurbo1@gmail.com>',
                            to: user.email,
                            subject: "Reset your password",
                            text: "Click the link to reset your password: ".concat(url),
                            html: "\n          <h1>Hello ".concat(user.email, "</h1>\n          <p>Please reset your password:</p>\n          <a href=\"").concat(url, "\">Reset Password</a>\n          <p>Token: ").concat(token, "</p>\n        "),
                        })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); },
    },
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
            var user = _b.user, url = _b.url, token = _b.token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("Verification email sent to:", user.email);
                        console.log("Verification URL:", url);
                        console.log("Verification token:", token);
                        return [4 /*yield*/, transporter.sendMail({
                                from: '"Maddison Foo Koch" <mahmoodapurbo1@gmail.com>',
                                to: user.email,
                                subject: "Verify your email address",
                                text: "Click the link to verify your email: ".concat(url),
                                html: verificationEmailTemplate({
                                    userEmail: user.email,
                                    verificationUrl: url,
                                    token: token,
                                    userName: "Sir",
                                }),
                            })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); },
    },
});
