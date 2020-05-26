"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const openRoutes_1 = __importDefault(require("./routes/openRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //  depende del servicio subida de aplicacion en la nuve 
        this.app.use(morgan_1.default('dev')); // permite ver con que responde el servidor 
        this.app.use(cors_1.default()); // permite a angular comunicarse con el servidor 
        this.app.use(express_1.default.json()); // Sercidor entiende los formatos json proveninetes de Angular
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/pacientes/lista', openRoutes_1.default); // esta es la ruta a la que tengo que ir para poder ver los juegos 
    }
    start() {
        this.app.listen(this.app.get('port'), () => { console.log('server on port', this.app.get('port')); });
    }
}
const server = new Server();
server.start();
