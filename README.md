# TravesIA Front

Cliente web de TravesIA, una aplicación de planificación de viajes con IA. A partir de las preferencias del usuario (destino, fechas, presupuesto y estilo de viaje) muestra un itinerario día a día en formato timeline.

Proyecto intermodular del ciclo DAW. Todo el código debe ser comprendido y defendible por quien lo integra.

## Repositorios del proyecto

| Repositorio | Contenido |
|---|---|
| [TravesIA-front](https://github.com/UNIRDAW-TravesIA/TravesIA-front) | Cliente Angular (este repositorio) |
| [TravesIA-back](https://github.com/UNIRDAW-TravesIA/TravesIA-back) | API REST con Node.js y Express |

## Interfaz

Layout de tres paneles:

1. Sidebar izquierdo: historial de chats y viajes guardados (colapsable).
2. Zona central: chat interactivo con la IA.
3. Zona derecha: timeline del itinerario, actividades y métricas.

## Equipo

| Persona | Responsabilidad |
|---|---|
| Roberto | Frontend y UI/UX: Angular, Tailwind CSS, diseño visual |
| Vega | Backend e IA: Node.js, Express, prompts, CI/CD |
| Andiee | Base de datos, autenticación y QA: pruebas de carga |

## Stack

- Angular 21 (Angular CLI) y Tailwind CSS 4.
- ESLint y Prettier para calidad y formato; Vitest para tests unitarios.
- Despliegue en Vercel, con deploy automático al hacer merge en `main`.

## Requisitos previos

- [Node.js 24](https://nodejs.org) (incluye npm 11). Comprueba con `node -v`.
- [Git](https://git-scm.com).
- Angular CLI, instalado de forma global:

```bash
npm install -g @angular/cli
```

- Extensiones de VS Code recomendadas:
  - Angular Language Service (`angular.ng-template`)
  - ESLint (`dbaeumer.vscode-eslint`)
  - Prettier (`esbenp.prettier-vscode`)
  - Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

Recomendado: activa "Format on Save" en VS Code con Prettier como formateador por defecto.

## Puesta en marcha

```bash
git clone https://github.com/UNIRDAW-TravesIA/TravesIA-front.git
cd TravesIA-front
git checkout dev
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200`.

Ejecuta `npm install` cada vez que cambies de rama o hagas `git pull`, por si alguien ha añadido dependencias.

### Comandos

| Comando | Cuándo usarlo |
|---|---|
| `npm start` | Mientras desarrollas. Servidor con recarga automática |
| `npm run lint` | Antes de cada PR. Revisa el código con ESLint en busca de errores y malas prácticas |
| `npm test` | Al cambiar lógica o componentes, y antes de cada PR. Ejecuta los tests con Vitest |
| `npm run build` | Antes de cada PR. Compila para producción en `dist/client/browser`; es lo que ejecuta Vercel |

El CI de GitHub ejecuta `lint`, `build` y `test` en cada Pull Request. Si pasan en tu ordenador, pasarán en GitHub.

## Flujo de trabajo con Git

| Rama | Uso |
|---|---|
| `main` | Producción. Cada merge despliega automáticamente. |
| `dev` | Integración. Aquí se juntan las features antes de pasar a producción. |
| `feature/<nombre>` | Una rama por tarea, creada siempre desde `dev`. |

Nunca se hace push directo a `main` ni a `dev`. Todo entra mediante Pull Request.

1. Actualiza `dev` y crea tu rama:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-descriptivo
```

2. Trabaja y haz commits pequeños y frecuentes:

```bash
git add <archivos>
git commit -m "feat: añade componente de chat"
```

3. Sube la rama:

```bash
git push -u origin feature/nombre-descriptivo
```

4. En GitHub abre un Pull Request con **base `dev`** y **compare tu rama**. Comprueba el desplegable de base antes de crearlo, por defecto GitHub propone `main`.
5. Pide revisión a otro miembro del equipo. El CI debe pasar y debe haber al menos una aprobación.
6. Tras el merge, borra la rama y vuelve a empezar desde `dev` actualizado.

Cuando `dev` esté estable, se abre un Pull Request con **base `main`** y **compare `dev`**. Al hacer merge se dispara el deploy.

### Convención de commits

Formato `tipo: descripción` en español, corto y en imperativo.

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de un error |
| `refactor` | Cambio interno sin modificar el comportamiento |
| `docs` | Documentación |
| `chore` | Configuración, dependencias y tareas de mantenimiento |

### Errores habituales

- Hacer commit estando en `dev` o `main`: comprueba con `git branch` en qué rama estás antes de empezar.
- Abrir el PR con base `main` en lugar de `dev`.
- Subir `node_modules`, `.env` o `dist`: están en `.gitignore`. Si aparecen en `git status`, avisa.

## Convenciones de código

- Documentación y commits en español; identificadores de código en inglés.
- Formato con Prettier y análisis con ESLint antes de cada PR.
- Sin comentarios que expliquen lo obvio. Solo se comenta el porqué de una decisión no evidente.
- Si se usa IA como apoyo, hay que entender el código que se integra y saber justificarlo en la demo.

## Diseño

| Elemento | Valor |
|---|---|
| Terracota (primario) | `#C6754E` |
| Verde bosque (secundario) | `#323E32` |
| Arena (fondo) | `#E7DDD1` |
| Texto | `#1a1a1a` |
| Títulos | Playfair Display |
| Cuerpo e interfaz | Inter |

## Reuniones

Sesiones de trabajo los sábados de 11:00 a 13:00. Los primeros 15-20 minutos son para la demo de lo realizado y la explicación técnica de las decisiones.
