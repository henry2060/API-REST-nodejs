import express, {Application} from 'express';
import morgan from 'morgan';
//Routes
import IndexRoutes from './routes/index.routes'

/**
 * clase que implementa la configuracion del servidor
 */
export class App{

    private app: Application;
    /**
     * constructor que inicializa la App
     */
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    /**
     * configuracion del puerto del servidor
     */
    settings(){
        this.app.set('port', this.port || process.env.PORT ||3000)
    }
    /**
     * uso de rutas para los servicios
     */
    routes(){
        this.app.use(IndexRoutes);
    }
    /**
     * middlewares utilizados 
     */
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
    /**
     * puerto por el que escucha el servidor
     */
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port',this.app.get('port'));
    }
}