# Farmaka SRL — Sitio institucional

Landing institucional de **Farmaka S.R.L. (Droguería)**, construida con **React 19 + TypeScript + Vite**.
Portada del mockup de diseño v1, sin dependencias de UI externas: sólo React y CSS Modules.

## Requisitos

- **Node.js 20.19+ o 22.12+** (Vite 7 lo exige) y npm.
  Este proyecto se verificó con **Node 24.19.0 / npm 11.17.0**.

## Puesta en marcha

```bash
npm install
npm run dev
```

El sitio queda en <http://localhost:5173>.

| Script              | Qué hace                                         |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desarrollo con HMR                   |
| `npm run build`     | Chequeo de tipos + build de producción en `dist/` |
| `npm run preview`   | Sirve el build de producción para verificarlo    |
| `npm run typecheck` | Sólo chequeo de tipos                            |

## Estructura

```
src/
├── main.tsx                  # Punto de entrada
├── App.tsx                   # Composición de la página
├── data/
│   ├── site.ts               # ⭐ Contenido de la home (textos, servicios, contacto)
│   └── pages.ts              # ⚠️ Contenido BORRADOR de /servicios y /nosotros
├── pages/                    # Una página por ruta + 404
├── types/index.ts            # Tipos compartidos
├── hooks/
│   └── useActiveSection.ts   # Resalta el item de nav de la sección visible
├── services/contactService.ts # Envío del formulario (con TODO de integración)
├── utils/validation.ts        # Validación del formulario
├── styles/
│   ├── tokens.css            # Paleta, tipografías y medidas
│   ├── global.css            # Reset + utilidades
│   └── buttons.module.css    # CTA y botones compartidos
└── components/
    ├── layout/               # Header, Footer
    ├── sections/             # Hero, Servicios, Nosotros, Contacto
    └── ui/                   # Logo, Eyebrow, Section, iconos, FAB de WhatsApp
```

## Cómo editar el contenido

Casi todo sale de [`src/data/site.ts`](src/data/site.ts): textos del hero, métricas, servicios,
valores, badges y datos de contacto. Cambiar un teléfono o agregar un servicio no requiere
tocar ningún componente.

### Pendientes antes de publicar

1. **WhatsApp** — en `src/data/site.ts`, `contact.whatsapp` tiene un número de ejemplo.
   Reemplazalo por el real, en formato internacional sin signos (ej. `5491123456789`).
2. **Formulario de contacto** — falta el alta en Formspree. Ver
   [Formulario de contacto](#formulario-de-contacto) más abajo.
3. **Métricas del hero** — los números (`+12 años`, `+180 farmacias`) vienen del mockup:
   confirmar con la empresa antes de publicarlos.
4. **Contenido de `/servicios` y `/nosotros`** — [`src/data/pages.ts`](src/data/pages.ts) es un
   **borrador** redactado a partir de las descripciones cortas de la home. Todo lo regulatorio
   (ANMAT, RNE, Buenas Prácticas de Distribución, dirección técnica, alcance de la cobertura)
   tiene que salir validado por la empresa antes de publicarse.
4. **Dominio y OG image** — completar las URLs absolutas en `index.html` cuando haya dominio.

## Formulario de contacto

El envío va por **Formspree**. El ciclo es:

```
Visitante completa el form  →  POST a Formspree  →  mail a administracion@farmaka.com.ar
                                    (+ historial en el panel de Formspree)
```

### Alta (una sola vez)

1. Crear cuenta en <https://formspree.io> y un formulario nuevo.
2. Poner como destino **administracion@farmaka.com.ar**.
3. Formspree manda un mail de verificación a esa casilla: **hay que confirmarlo**,
   si no las consultas no se reenvían.
4. Copiar el endpoint (`https://formspree.io/f/<ID>`) y cargarlo en `VITE_CONTACT_ENDPOINT`:
   en `.env.local` para desarrollo, y en las variables de entorno del hosting para producción.

Sin esa variable el formulario valida y responde normalmente, pero **simula** el envío y
loguea el payload en consola. Útil para desarrollo.

### Por qué el email es obligatorio

Formspree arma la cabecera `Reply-To` a partir del campo llamado exactamente **`email`**.
Eso es lo que permite abrir la consulta en Gmail, tocar "Responder" y que la respuesta le
llegue al visitante en vez de a Formspree.

Por eso el email es requerido y el campo **no se debe renombrar**. El teléfono es opcional
y viaja como dato adicional.

### Anti-spam

El formulario incluye un honeypot (`_gotcha`): un campo fuera de pantalla que las personas
no ven y los bots suelen completar. Formspree descarta automáticamente los envíos que lo
traigan con contenido. El resto del filtrado lo hace Formspree del lado del servidor, así
que no hace falta captcha salvo que empiece a entrar basura.

### Notas

- El plan gratuito tiene tope mensual de envíos; conviene verificar el límite vigente al dar
  de alta la cuenta.
- El mail llega desde el dominio de Formspree (Gmail muestra un *"via formspree.io"*).
  Eso es esperado: el `Reply-To` es lo que hace que responder funcione.
- Cambiar de proveedor no requiere tocar componentes: el único punto de contacto con la API
  está en [`src/services/contactService.ts`](src/services/contactService.ts).

## Deploy

`npm run build` genera `dist/`: HTML, CSS y JS estáticos, sin servidor.

⚠️ El sitio usa **routing del lado del cliente** (`/servicios`, `/nosotros`), así que el
hosting tiene que devolver `index.html` para cualquier ruta que no sea un archivo. Sin eso,
entrar directo a `dominio.com/servicios` o recargar esa página da 404.

### Vercel / Netlify (recomendado)

Ambos detectan Vite automáticamente. Subí el repo y confirmá:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 o superior

El fallback ya está resuelto: [`vercel.json`](vercel.json) para Vercel y
[`public/_redirects`](public/_redirects) para Netlify. No hay que tocar nada.

Las variables de entorno (`VITE_CONTACT_ENDPOINT`) se cargan en el panel del proveedor.
Ojo: las variables `VITE_*` quedan embebidas en el bundle y son públicas — nunca poner
ahí una API key secreta.

### Hosting tradicional (cPanel, FTP, IIS)

Copiar el **contenido** de `dist/` a la raíz pública (`public_html`, `wwwroot`, etc.)
y agregar el fallback a mano, que ahí no viene dado.

En Apache, un `.htaccess` en la raíz:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

En IIS, la regla equivalente va en `web.config` con el módulo URL Rewrite.

Si el sitio va a colgar de un subdirectorio (ej. `dominio.com/farmaka/`), agregar la base
en `vite.config.ts` antes de buildear:

```ts
export default defineConfig({
  base: '/farmaka/',
  // ...
})
```

### Antes del primer deploy

Completar en `index.html` las URLs absolutas de `og:image` y agregar `<link rel="canonical">`
con el dominio real; las redes sociales no resuelven rutas relativas.

## Diseño

- **Tipografías**: Syne (títulos), IBM Plex Sans (texto), IBM Plex Mono (datos y etiquetas).
  Se cargan desde Google Fonts en `index.html`.
- **Paleta**: verde droguería (`#2E9E44`) sobre fondo papel. El sitio es **claro por defecto**
  siempre — no se consulta `prefers-color-scheme`. El modo noche es opt-in desde el botón del
  header, se guarda en `localStorage` y se aplica como `<html data-theme="dark">`.
  Un script inline en `index.html` lo restaura antes del primer pintado para evitar parpadeo;
  si cambiás la clave de storage, hay que tocar los dos lugares.
- **Motivo visual**: molécula del logo + fichas tipo "hoja de especificaciones"
  (marcas de esquina, listas monoespaciadas, bordes de 1px).
- **Logo original**: `public/brand/farmaka-logo.webp` — se usa como favicon y OG image.
  En el header la marca se dibuja en SVG (`src/components/ui/Logo.tsx`) para que escale
  nítida y se adapte al tema oscuro.

## Accesibilidad

- Link "saltar al contenido", `aria-current` en el nav, `aria-live` en el resultado del formulario.
- Errores de formulario asociados por `aria-describedby`.
- Foco visible con `:focus-visible`, y respeto por `prefers-reduced-motion`.
