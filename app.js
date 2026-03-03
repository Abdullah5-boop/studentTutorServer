"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./lib/auth");
var node_1 = require("better-auth/node");
var cors_1 = require("cors");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.all("/api/auth/*", (0, node_1.toNodeHandler)(auth_1.auth));
app.get("/", function (req, res) {
    console.log("Received a request to the root endpoint");
    res.send({ message: "Hello, World! from server " });
});
exports.default = app;
