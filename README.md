# API de Actividades extraescolares con Node.js

Laboratorio de despliegue de aplicaciones, Agosto-Diciembre 2024, 12:15 - 13:55

## Integrantes

- Aldana Pérez José Samuel
- Manrique Galván Omar Manuel
- Muñoz Rodríguez Diego
- Solis M del Campo Brian Uriel

## Instalación

### Manual

Hay que tener instalado node para descargar las dependencias desde terminal:

```bash
npm install
```

Ejecutar la API:

```bash
npm start
```

Y listo, la API estará levantada en `http://localhost:3000/api/v2/extraescolares`

Si se está desarrollando, usar el modo dev (se reinicia al modificar y guardar los archivos):

```bash
npm run dev
```

### Docker

Construir la imagen:

```bash
docker build -t extraescolares .
```

Ejecutar la imágen:

```bash
docker run -p 3000:3000 extraescolares
```

## Documentación

- GET `/api/v2/extraescolares`
- GET `/api/v2/extraescolares/:id`
- POST `/api/v2/extraescolares`
- PUT `/api/v2/extraescolares/:id`
- DELETE `/api/v2/extraescolares/:id`

![image](https://github.com/user-attachments/assets/170f6981-638e-4226-af73-09e54001c2f5)

Información sobre las actividades extraescolares extraida de: [https://www.taekukmusul.com.mx/tecleon/inicial.php](https://www.taekukmusul.com.mx/tecleon/inicial.php)

**Nota:** La versión 2 trabaja con un cluster de MongoDB Atlas en la nube como Base de Datos. La versión que trabaja con el archivo `db.json` local sigue disponible en `http://localhost:3000/api/v1/extraescolares`

## Testing

Ejecutar todos los tests:

```bash
npm run test
```

Si se está desarrollando, `:watch` ayuda a ejecutar todos los tests cada vez que se hagan cambios en los archivos:

```bash
npm run test:watch
```

## Jenkins

Para instalar Jenkins con Docker, se siguió la [documentación oficial](https://www.jenkins.io/doc/book/installing/docker/).

Articulo que se siguió para la configuración del pipeline: [Jenkins Starting with Pipeline doing a Node.js test](https://medium.com/@gustavo.guss/jenkins-starting-with-pipeline-doing-a-node-js-test-72c6057b67d4)

### Capturas de pantalla

![image](https://github.com/user-attachments/assets/3c0ab081-5b4e-4557-b826-b58e61e6541d)

![image](https://github.com/user-attachments/assets/5f102c8e-e14f-4406-9a52-dfa79c482876)
