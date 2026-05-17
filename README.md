# ArjunaFit — Landing v10 Premium

Landing rediseñada con estética **wellness-tech premium LATAM**.
Inspiración: Ladder · Headspace · Apple Fitness · Spotify · Calm.

---

## 📁 Estructura

```
arjunafit-landing/
├── index.html              ← Landing completa
├── assets/
│   ├── css/
│   │   └── styles.css      ← Diseño dark premium
│   ├── js/
│   │   └── landing.js      ← Interacciones (nav, menú móvil, reveal)
│   └── img/                ← Vacía: las imágenes se cargan desde arjunafit.com
└── README.md
```

> **Nota:** Las imágenes de testimonios y fotos siguen cargándose desde
> `https://arjunafit.com/assets/img/...` para no duplicar archivos.

---

## 🚀 Cómo subirlo a Netlify

### Opción 1 — Arrastrar y soltar (más rápido)

1. Entra a [app.netlify.com](https://app.netlify.com) y abre el sitio de `arjunafit.com`
2. Ve a la pestaña **Deploys**
3. Arrastra la **carpeta completa `arjunafit-landing`** (descomprimida) al área de drop
4. En 30 segundos está live

### Opción 2 — Reemplazar solo los archivos cambiados

Si prefieres mantener el resto del sitio (terminos.html, privacidad.html, etc.):
- Sube solo `index.html` y la carpeta `assets/` reemplazando los actuales
- Mantén todo lo demás como está

---

## 🎨 Lo que cambió respecto a la versión anterior

| Aspecto | Antes | Ahora |
|---|---|---|
| **Estética** | Fitness premium con emojis | Wellness-tech editorial dark |
| **Tipografía** | Sans-serif comercial | Fraunces serif editorial + Inter Tight |
| **Color principal** | Coral + violeta saturado | Violeta sofisticado sobre negro profundo |
| **Hero** | Badges + marquee + emojis | Titular emocional + mockup Apple-like |
| **Precios** | Visibles desde el inicio | Movidos al final, después de generar deseo |
| **Densidad** | Cajas saturadas | Mucho aire, jerarquía editorial |
| **Emojis** | En todos lados | Cero en títulos, mínimos en CTAs |
| **Mobile** | Comprimido | Mobile-first, respiración generosa |

---

## 🧭 Estructura narrativa nueva

1. **Hero** — *Tu mejor versión, acompañada.* + mockup premium
2. **Problema** — Empezar es fácil, sostenerlo no
3. **Solución** — IA · Nutrición LATAM · Acompañamiento (3 pilares)
4. **Ecosistema** — Visual del sistema interconectado
5. **Experiencia** — 3 capturas reales de la app (Dashboard, IA, Adherencia)
6. **Transformación** — 4 valores: Claridad · Sostenibilidad · Acompañamiento · Hábitos
7. **Testimonios** — 4 historias rediseñadas
8. **Pricing** — Retos + Planes mensuales + Garantía
9. **FAQ** — 7 preguntas clave
10. **CTA Final** — Emocional, calmado, definitivo

---

## 🔗 Enlaces externos que mantiene

- **Hotmart (compras):** Los 4 links de pago siguen activos
- **WhatsApp:** +57 320 730 1621
- **App de registro:** https://arjunafit.app/registro.html
- **Términos / Privacidad:** mantienen sus URLs originales

---

## ✏️ Cómo editar después

- Cambiar **colores**: edita las variables en `:root` al inicio de `styles.css`
- Cambiar **textos**: directo en `index.html` (todo está semánticamente claro)
- Agregar **nuevo testimonio**: copia un bloque `<article class="testimonial">` y modifica
- Cambiar **fuente serif**: en el `<link>` de Google Fonts dentro del `<head>`

---

## 💡 Para futuras iteraciones

Si en 30 días los datos muestran que algo no funciona, lo más probable es:
- El **hero** (cambiar el titular)
- El **CTA primario** (probar "Empezar ahora" vs "7 días gratis")
- El **orden del pricing** (subirlo si los visitantes no llegan al final)

Todo se puede A/B testear con Netlify Split Testing.
