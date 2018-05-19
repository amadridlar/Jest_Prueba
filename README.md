# Jest_Prueba

## Ejecutar test
Desde raiz del proyecto ejecutar 
``` npm test```

Jest identifica como test todos los archivos cuya extensión sea ```.test.js```

## Ejecutar test con reporte de cobertura
### Opción 1
Ejecutar desde raiz del proyecto ```npm test -- --coverage```

### Opción 2
En el fichero ```jest.config.js```descomentar la siguiente linea
```
//  "collectCoverage": true,
```
Para ambas opciones el informe de cobertura se guarda en el fichero ```test\reports\coverage```
