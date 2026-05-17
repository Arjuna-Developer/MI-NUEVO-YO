# 🎯 ArjunaFit Landing v13 — Ecosistema producto

Esta versión refuerza la conexión natural entre `arjunafit.com` (landing) y `arjunafit.app` (producto), sin hacerla técnica ni sobreexplicada.

---

## ✨ Lo que cambió en esta versión

| Antes | Ahora |
|---|---|
| 6 CTAs distintos ("Empezar gratis", "Probar gratis", "Empezar mi reto"…) | **7 CTAs unificados: "Entrar a la app"** |
| Links iban a `arjunafit.app/registro.html` (404) | Todos a `arjunafit.app` (raíz, funciona) |
| Hero: "Wellness inteligente · LATAM" | Hero: **"Training · Nutrition · AI Coaching"** |
| Hero sub: "ecosistema que te entiende" | Hero sub: **"Una app de entrenamiento, nutrición y acompañamiento inteligente"** |
| Chip: "Arjuna IA está aquí" | Chip: **"App disponible ahora"** |
| Footer: logo simple | Footer: logo + tagline + link app destacado |
| Trust: "Acceso inmediato · Pago seguro" | Trust: **"Acceso inmediato a la app · Sin tarjeta de crédito"** |
| Title SEO: "Tu mejor versión, acompañada" | Title SEO: **"La app de entrenamiento, nutrición y acompañamiento inteligente"** |

---

## 🎯 Filosofía aplicada

**La conexión `.com` ↔ `.app` se siente, no se explica.**

- ✗ Sin toggles visibles `.com / .app`
- ✗ Sin banners "esto es parte de un ecosistema"
- ✗ Sin explicaciones técnicas
- ✓ El lenguaje habla de "la app", no de "el reto"
- ✓ El tagline en el footer sugiere producto, no curso
- ✓ Los CTAs sugieren entrar a algo que ya existe

El visitante debe sentir: **"esto es un producto real, no una página de venta"**.

---

## ✅ Cómo subirlo a Netlify

1. **Descarga el archivo `index.html`** (es UN solo archivo, no una carpeta)
2. Ve a [Netlify](https://app.netlify.com) → tu sitio `arjunafit.com` → **Deploys**
3. ⚠️ **Arrastra SOLO el archivo `index.html`** (no una carpeta, solo el archivo)
4. Espera 10 segundos
5. Vacía caché con **Ctrl + Shift + R** (o ábrelo en incógnito)

---

## 🛡️ Sobre el 404 de /registro.html

Detecté que `arjunafit.app/registro.html` da 404 (incluso el propio link interno de la app lo está rompiendo).

**Solución temporal aplicada:** todos los CTAs ahora apuntan a `arjunafit.app` (la raíz que sí funciona). El usuario nuevo cae en login y desde ahí ve "¿nueva aquí? Pruébala 7 días gratis →".

**Cuando arregles el routing de la app**, basta con cambiar 7 URLs en el HTML para redirigir a `/registro.html` de nuevo. Es trivial.

---

## 📝 Si necesitas editar después

El archivo `index.html` tiene 3 zonas:

1. `<style>...</style>` — CSS completo (todo el diseño dark premium)
2. `<body>...</body>` — HTML (contenido y estructura)
3. `<script>...</script>` — JS (interacciones de nav, scroll, reveal)

Cambios pequeños puedes hacerlos directo aquí.
Cambios grandes, mejor dime y te entrego nueva versión.
