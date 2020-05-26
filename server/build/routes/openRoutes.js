"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openController_1 = __importDefault(require("../controllers/openController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', openController_1.default.list);
        this.router.get('/:cc', openController_1.default.getOne);
        this.router.put('/:id', openController_1.default.update);
    }
}
const gameRouters = new GamesRoutes();
exports.default = gameRouters.router;
