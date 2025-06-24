# EcoSofía: Inteligencia Verde

Esta es una aplicación Next.js generada con
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Ejecutar el servidor de desarrollo:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Abre http://localhost:3000 con tu navegador para ver el resultado.

## Explorar

En el proyecto, puedes ver:

- `lib/source.ts`: Código para el adaptador de fuente de contenido, [`loader()`](https://fumadocs.dev/docs/headless/source-api) proporciona la interfaz para acceder a tu contenido.
- `app/layout.config.tsx`: Opciones compartidas para diseños, opcional pero preferido para mantener.

| Ruta                     | Descripción                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | El grupo de rutas para tu página de aterrizaje y otras páginas. |
| `app/docs`                | El diseño y las páginas de documentación.                    |
| `app/api/search/route.ts` | El controlador de ruta para la búsqueda.                          |

### Fumadocs MDX

Se ha incluido un archivo de configuración `source.config.ts`, puedes personalizar diferentes opciones como el esquema de frontmatter.

Lee la [Introducción](https://fumadocs.dev/docs/mdx) para más detalles.

## Aprende Más

Para aprender más sobre Next.js y Fumadocs, echa un vistazo a los siguientes
recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre Next.js
  características y API.
- [Aprender Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.
- [Fumadocs](https://fumadocs.vercel.app) - aprende sobre Fumadocs
