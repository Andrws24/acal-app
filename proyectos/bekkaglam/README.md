# Bekkaglam — Tienda Online Boutique

## Stack

- **Framework:** Next.js 16 (App Router), TypeScript
- **Estilos:** Tailwind CSS v4
- **Base de datos:** PostgreSQL + Prisma ORM
- **Autenticación:** NextAuth v5 (Credentials Provider)
- **Checkout:** WhatsApp (sin pasarela de pago)

## Primeros pasos

### 1. Variables de entorno

Copia `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita los valores:

| Variable | Descripción |
|---|---|
| `DATABASE_URL` | Conexión a PostgreSQL (local o Neon.tech) |
| `NEXTAUTH_SECRET` | Genera uno con `npx next-auth secret` |
| `NEXTAUTH_URL` | URL de la app (ej. `http://localhost:3000`) |
| `ADMIN_EMAIL` | Email del admin para login |
| `ADMIN_PASSWORD` | Contraseña del admin (mín. 6 caracteres) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp con código país (ej. `573245634876`) |

### 2. Base de datos

```bash
npx prisma migrate dev --name init
npx prisma db seed  # crea el usuario admin automáticamente
```

### 3. Desarrollo

```bash
npm run dev
# Abre http://localhost:3000
# Admin: http://localhost:3000/admin
```

### 4. Despliegue en Vercel

1. Conecta el repo a Vercel
2. Agrega las variables de entorno en el dashboard de Vercel
3. Configura una base de datos PostgreSQL en [Neon.tech](https://neon.tech)
4. Ejecuta las migraciones:

```bash
npx prisma migrate deploy
```

5. Despliega

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home |
| `/tienda` | Catálogo con filtros |
| `/producto/[slug]` | Detalle de producto + WhatsApp |
| `/nosotros` | Sobre la marca |
| `/admin/login` | Inicio de sesión |
| `/admin` | Dashboard |
| `/admin/productos` | CRUD productos |
| `/admin/categorias` | CRUD categorías |

## Flujo de compra

1. Usuario ve el producto
2. Selecciona talla, color y cantidad
3. Hace clic en "Comprar por WhatsApp"
4. Se abre WhatsApp con mensaje pre-armado
5. Vendedor confirma y gestiona el pedido

Las imágenes de productos se almacenan como URLs (por ahora públicas). Para producción, migrar a Vercel Blob o Cloudinary.
