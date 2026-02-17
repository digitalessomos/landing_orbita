# Directrices de Proyecto: RutaTotal 360 (Cerebro)

Este documento contiene los pilares fundamentales extraídos del cuaderno de NotebookLM "RutaTotal 360 cerebro", que sirven como base para todo el desarrollo en esta carpeta.

## 1. Filosofía de Diseño (UI/UX)
- **Principio "Glance-First":** La interfaz debe ser legible y comprensible a **2 metros de distancia**. Priorizar tipografía grande e información de alto contraste.
- **Psicología del Color:**
  - **Verde Esmeralda (#00A382):** Sincronización exitosa, paz operativa.
  - **Soft Light (#F4F7F6):** Fondo base para reducir fatiga visual (evitar blanco puro).
  - **Colores de Repartidor:** El fondo del pedido cambia según el color asignado al repartidor.
- **Minimalismo Operativo:** Enfocarse solo en logística y despacho. Eliminar ruido visual innecesario.

## 2. Pilares Técnicos
- **Tecnología:** Vanilla JavaScript, HTML5, CSS3.
- **Base de Datos:** Firebase (Real-time DB) para sincronización multi-pantalla sin recargas.
- **Arquitectura:** Modularización en "Servicios" (ej. `auth.service.js`, `database.service.js`).
- **Estados del Pedido:** Manejo estricto de 4 estados:
  1. **Cocina**
  2. **Mostrador**
  3. **En Viaje**
  4. **Entregado**

## 3. Reglas de Negocio Críticas
- **Muerte del Papel:** Digitalización total del flujo de trabajo.
- **Torre de Control:** El personal de mostrador es la autoridad central que valida el cierre del ciclo.
- **Vinculación Inviolable:** Cada pedido se asocia de forma única a un repartidor para trazabilidad total.
- **Disponibilidad en Tiempo Real:** Al entregar, el repartidor queda automáticamente libre en el sistema.

---
*Este documento es la referencia principal para el desarrollo de RutaTotal 360.*
