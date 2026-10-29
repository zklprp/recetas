# Recetario casero

Aplicación web de recetas creada con React y Vite.

## Funcionalidades

- Pantalla de inicio con dos recetas, nombre, fotografía, descripción y tiempo aproximado.
- Navegación a un módulo de detalle para cada receta.
- Cada detalle muestra foto, ingredientes y preparación paso a paso.
- Diseño adaptable a escritorio y móvil.
- Rutas con React Router.

## Tecnologías

- React
- Vite
- React Router DOM
- Lucide React
- CSS

## Requisitos

Node.js 18 o superior y npm.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre la URL local que indique Vite en la terminal.

## Compilar para producción

```bash
npm run build
npm run preview
```

## Historias de usuario

1. Como visitante, quiero ver las recetas disponibles en la pantalla de inicio para decidir qué cocinar.
2. Como visitante, quiero seleccionar una receta y consultar su foto, ingredientes y pasos para poder prepararla.
3. Como visitante, quiero volver al recetario desde el detalle para elegir otra receta.

## Casos de prueba

| ID | Acción | Resultado esperado |
| --- | --- | --- |
| CP-01 | Abrir la página principal `/` | Se muestran dos recetas con nombre y fotografía. |
| CP-02 | Seleccionar “Tacos de pollo al limón” | Se abre `/receta/tacos-pollo-limon` y aparecen foto, ingredientes y pasos. |
| CP-03 | Seleccionar “Pasta cremosa con tomate” | Se abre `/receta/pasta-tomate` y aparecen foto, ingredientes y pasos. |
| CP-04 | Pulsar “Volver al recetario” | El usuario regresa a la pantalla anterior o al inicio. |

## Imágenes

Las fotos se cargan desde Unsplash mediante URL, por lo que se necesita conexión a internet para visualizarlas.

## Estructura

```text
recetario/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── recipes.js
    └── styles.css
```
