import {Request,Response} from 'express';
import pool from '../database';

class GamesController{



    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM paciente', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response):Promise<void> {
        const { cc } = req.params;

        const games = await pool.query('SELECT * FROM registros WHERE CC = ? ', [cc], function(err, result, fields) {
            if (err) {
                throw err;
            }

            else if(result != ''){

                res.json(result);
                console.log(result); 
            
            }else{
                res.json({message:"No existe"})
            }

        });
        
    }


    public async update (req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        const games = await pool.query('UPDATE registros set ? WHERE id = ?', [req.body,id], function(err, result, fields) {

            if (err) {
                throw err;
            }

            else if(result != ''){

                res.json({message:"Diagnostico asignado"})
            
            }else{
                res.json({message:"No existe"})
            }

        });
        
    }


}

const gamesController = new GamesController();
export default gamesController;