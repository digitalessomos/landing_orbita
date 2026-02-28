/**
 * @typedef {Object} PlanConfig
 * @property {string} id - Identificador único del plan.
 * @property {string} fase - Nombre de la fase operativa.
 * @property {string} titulo - Título comercial del plan.
 * @property {string} subtitulo - Beneficio emocional principal.
 * @property {string} descripcion - Descripción detallada orientada a ventas.
 * @property {number|string} precioInstalacion - Costo fijo inicial.
 * @property {number|string} precioMensual - Tarifa de suscripción mensual.
 * @property {boolean} popular - Indica si es el plan recomendado.
 * @property {string} cta - Texto del botón de llamado a la acción.
 * @property {string[]} caracteristicas - Lista de funcionalidades incluidas.
 */

/** @type {PlanConfig[]} */
export const PLANES_CONFIG = [
    {
        id: "fase-3",
        fase: "Fase 03",
        titulo: "Torre de Control 360",
        subtitulo: "Estado de Poder Absoluto",
        descripcion: "Para locales de alto volumen que buscan automatización completa e inteligencia artificial.",
        precioInstalacion: "VIP",
        precioMensual: "Custom",
        popular: true,
        cta: "Solicitar Auditoría",
        caracteristicas: [
            "Todo lo incluido en Fase 02",
            "Driver App Premium (Logística de Última Milla)",
            //"Trazabilidad absoluta en la calle",
            "Sistema de Multi-Atención Inteligente",
            "Protocolo de Acción Directa: Cero-Ruido",
            "Alertas Hápticas Torre de Control",
            "Soporte prioritario 24/7",
            "Backup Local redundante"
        ]
    }
];
