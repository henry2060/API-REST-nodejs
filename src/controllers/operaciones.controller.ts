import { Request,Response } from "express";
import { dataRequest } from '../interface/request.interface';
import { isNullOrUndefined } from "util";

/**
 * controlador para las operaciones aritmeticas (suma,resta,multipalcion,division)
 *
 * @param req - Request de las peticiones
 * @param res - Respuesta de la peticion
 * @return respuesta del servicio
 */
export function operaciones (req: Request,res: Response){
    try{
        var isaray:dataRequest=req.body;
        if(Array.isArray(isaray.num.datos)){
            var suma:number= sumar(isaray.num.datos);
            if(!/^([0-9])*$/.test(suma.toString())){
                return res.status(422).json({
                    data: "",
                    errors: ["invalid_data_format"]
                    });
            }
            var resta:number = restar(isaray.num.datos);
            var multiplica:number = multiplicar(isaray.num.datos);
            var divid:number|string = divide(isaray.num.datos);
            return res.json({
                data: {
                suma: suma,
                resta: resta,
                multiplicacion: multiplica,
                division: divid
                },
                errors: []
                });
        }else return res.status(422).json({
            data: "",
            errors: ["invalid_data_format"]
            });
    }catch{
        res.status(500).json({
            data: "",
            errors: ["internal_server_error’"]
            });
    }
}

/**
 * funcion que realiza la suma de los elemento dentro de un array o matriz
 *
 * @param arreglo - array o matriz
 * @return valor de la operacion
 */
function sumar(arreglo :any){
    var total:number;
    var flattened = arreglo.reduce(( accumulator:any, currentValue:any ) => 
            accumulator.concat(currentValue),[]);
    total=flattened.reduce((accumulator:any, currentValue:any)=>accumulator + currentValue);  
    return total;
}


/**
 * funcion que realiza la resta de los elemento dentro de un array o matriz
 *
 * @param arreglo - array o matriz
 * @return valor de la operacion
 */
function restar(arreglo :any){
    var total:number;
    var flattened = arreglo.reduce(( accumulator:any, currentValue:any ) => 
        accumulator.concat(currentValue),[]);
    total=flattened.reduce((accumulator:any, currentValue:any)=>accumulator - currentValue);  
    return total;
}

/**
 * funcion que realiza el producto de los elemento dentro de un array o matriz
 *
 * @param arreglo - array o matriz
 * @return valor de la operacion
 */
function multiplicar(arreglo :any){
    var total:number;
    var flattened = arreglo.reduce(( accumulator:any, currentValue:any ) => 
        accumulator.concat(currentValue),[]);
    total=flattened.reduce((accumulator:any, currentValue:any)=>accumulator * currentValue);  
    return total;
}

/**
 * funcion que realiza la division de los elemento dentro de un array o matriz
 *
 * @param arreglo - array o matriz
 * @return valor de la operacion
 */
function divide(arreglo :any){
    var total:number|string;
    var flattened = arreglo.reduce(( accumulator:any, currentValue:any ) => 
        accumulator.concat(currentValue),[]);
    let resultado=flattened.reduce((accumulator:any, currentValue:any)=>accumulator / currentValue); 
    if(resultado===Infinity){
        total="no se puede dividir en 0";
    }else return resultado; 
    return total;
}