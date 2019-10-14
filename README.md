# API-REST-nodejs
API-REST encargada de realizar operaciones basicas (suma,resta,producto,division)

# Prerequisitos

Validar que se cuenta con node y npm:
```
node -v
npm version
```

# Despliegue

clonar el repositorio por comando o descargarlo. Desde la consola ubicarse en la raiz del proyecto y ejecutar los siguiente Scripts

```
npm install
npm run build
npm run dev
```
una vez ejecutados los scripts estara habilitado el servidor nodeJs por el puerto 3000 y podra realizar las peticiones desde la herramienta que prefiera para el consumo de servicios (Postman, insomnia, etc). El servicio creado para la API utiliza el metodo Post.

```
http://localhost:3000/test
```

# Unit Test

Se debe tener en cuenta la estructura Request que utiliza el servicio, para que funcione correctamente se requiere la siguiente estructura de datos en el cuerpo de la peticion

```Json
{
	"num": {
		"datos":[[5,5],[1,6,7]]
	}
}
```

se genero un paquete de pruebas el cual se puede ejecutar con el siguiente script:
```
npm run test
npm run average
```
