import { Router } from "express";
import { operaciones } from "../controllers/operaciones.controller";


/**
 * se declara el enrutador
 */
const router = Router();

/**
 * configuracion ruta para el servicio del API
 */
router.route('/test')
    .post(operaciones);
    


export default router;