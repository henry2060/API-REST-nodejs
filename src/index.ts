import { App } from './app';

/**
 * iniciaizacion de la apliacion
 *
 */
async function main(){
    const app = new App(3000);
    await app.listen();
    
}

main();