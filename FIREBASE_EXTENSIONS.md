# Automatización de Leads (Lead Nurturing) en Firebase

Para que tu sistema de leads sea proactivo como una verdadera "Torre de Control", necesitamos que Firebase reaccione a cada nuevo Comandante.

## Opción A: Extensión "Trigger Email" (Recomendado)
Esta es la forma más rápida de enviar un correo de bienvenida automático sin programar.

### Pasos para Activar:
1. Ve a tu [Firebase Console](https://console.firebase.google.com/).
2. En el menú lateral, entra en **Extensions**.
3. Busca y selecciona **"Trigger Email from Firestore"**.
4. **Configuración clave:**
   - **Collection:** `leads_inbox`
   - **SMTP Connection URI:** Aquí debes poner los datos de tu servicio de correo (SendGrid, Mailjet o Gmail con App Password).
   - **Default from Address:** `contacto@rutatotal.com` (o la tuya).

### Cómo funciona:
Cada vez que un lead entre a `leads_inbox`, la extensión detectará el nuevo documento y enviará un correo usando la plantilla que tú definas.

---

## Opción B: Cloud Functions (Para WhatsApp y Alertas Pro)
Si quieres enviar alertas de WhatsApp o notificaciones personalizadas, usamos código.

### Ejemplo de Función (Alertas):
```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onNewLead = functions.firestore
    .document('leads_inbox/{leadId}')
    .onCreate(async (snap, context) => {
        const lead = snap.data();
        
        // Aquí podrías disparar un Webhook hacia WhatsApp API
        console.log(`¡NUEVO COMANDANTE! ${lead.nombre} de ${lead.local} ha calificado para Fase 3.`);
        
        // Opcional: Enviar una notificación Push a tu teléfono
        return admin.messaging().sendToTopic('admin_alerts', {
            notification: {
                title: 'NUEVO LEAD FASE 3',
                body: `${lead.nombre} - ${lead.local}`
            }
        });
    });
```

## Próximos Pasos Sugeridos:
1. **Crear Usuario Admin:** Ve a Firebase Auth y crea manualmente tu usuario (email/password) para poder entrar a `admin.html`.
2. **Seguridad:** Asegúrate de que las `firestore.rules` solo permitan leer `leads_inbox` a usuarios autenticados.
