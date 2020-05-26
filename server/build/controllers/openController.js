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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM paciente', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cc } = req.params;
            const games = yield database_1.default.query('SELECT * FROM registros WHERE CC = ? ', [cc], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                else if (result != '') {
                    res.json(result);
                    console.log(result);
                }
                else {
                    res.json({ message: "No existe" });
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('UPDATE registros set ? WHERE id = ?', [req.body, id], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                else if (result != '') {
                    res.json({ message: "Diagnostico asignado" });
                }
                else {
                    res.json({ message: "No existe" });
                }
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
