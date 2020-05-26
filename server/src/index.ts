import express, { Application } from 'express';


import morgan from 'morgan';
import cors from 'cors'; 


import indexRoutes from './routes/indexRoutes';
import openRoutes from './routes/openRoutes';

 
class Server{

    public app: Application

    constructor(){

        this.app = express();
        this.config();
        this.routes(); 
    
    }

    config(): void{

        this.app.set('port',   process.env.PORT ||3000);     //  depende del servicio subida de aplicacion en la nuve 
        this.app.use(morgan('dev'));                         // permite ver con que responde el servidor 
        this.app.use(cors());                                // permite a angular comunicarse con el servidor 
        this.app.use(express.json());                        // Sercidor entiende los formatos json proveninetes de Angular
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
 
        this.app.use('/',indexRoutes);           
        this.app.use('/pacientes/lista',openRoutes);   // esta es la ruta a la que tengo que ir para poder ver los juegos 
    }

    start(): void{
        this.app.listen(this.app.get('port'),() => {console.log('server on port',this.app.get('port'))});

    }

}

const server =  new Server();
server.start();