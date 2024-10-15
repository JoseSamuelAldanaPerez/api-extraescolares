# API de Actividades extraescolares con Node.js

Laboratorio de despliegue de aplicaciones, Agosto-Diciembre 2024, 12:15 - 13:55

## Integrantes

- Aldana Pérez José Samuel
- Manrique Galván Omar Manuel
- Diego Muñoz Rodríguez
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

Y listo, la API estará levantada en `http://localhost:3000/api/extraescolares`

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

- GET `/api/extraescolares`
- GET `/api/extraescolares/:id`
- POST `/api/extraescolares`
- PUT `/api/extraescolares/:id`
- DELETE `/api/extraescolares/:id`

![image](https://github.com/user-attachments/assets/170f6981-638e-4226-af73-09e54001c2f5)

Información sobre las actividades extraescolares extraida de: [https://www.taekukmusul.com.mx/tecleon/inicial.php](https://www.taekukmusul.com.mx/tecleon/inicial.php)
