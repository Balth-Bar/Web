import {Router} from 'express';
import openController from '../controllers/openController';

class GamesRoutes {

    public router : Router = Router();


    constructor(){

        this.config();

    
    }

    config(): void{
        
        this.router.get('/',openController.list);      
        this.router.get('/:cc',openController.getOne);
        this.router.put('/:id',openController.update);
       
    }



}

const gameRouters =  new GamesRoutes();
export default gameRouters.router;