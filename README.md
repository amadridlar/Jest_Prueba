# Jest_Prueba

## Ejecutar test
Desde raiz del proyecto ejecutar 
``` npm test```

## Ejecutar test con reporte de covertura
### Opción 1
Ejecutar desde raiz del proyecto ```npm test -- --coverage```

### Opción 2
En el fichero ```jest.config.js```descomentar la siguiente linea
```
//  "collectCoverage": true,
```
Para ambas opciones el informe de covertura se guarda en el fichero ```test\reports\coverage```
