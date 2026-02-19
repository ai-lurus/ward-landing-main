// Ward — Script para captura de leads
// ─────────────────────────────────────────────────────────────────
// INSTRUCCIONES DE SETUP:
//
// 1. Abre Google Sheets y crea una hoja nueva
// 2. En el menú: Extensiones → Apps Script
// 3. Borra el código que aparece y pega todo este archivo
// 4. Guarda (Ctrl+S)
// 5. Clic en "Implementar" → "Nueva implementación"
//    - Tipo: Aplicación web
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquier usuario
// 6. Clic en "Implementar" y copia la URL que aparece
// 7. En la landing, abre components/newsletter.tsx
//    y reemplaza 'TU_URL_DE_APPS_SCRIPT_AQUI' con esa URL
// ─────────────────────────────────────────────────────────────────

const SHEET_NAME = 'Leads' // Nombre de la pestaña donde se guardarán los datos

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    let sheet = ss.getSheetByName(SHEET_NAME)

    // Crea la hoja y encabezados si no existe
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME)
      sheet.appendRow(['Fecha', 'Nombre', 'Empresa', 'Unidades', 'Teléfono', 'Email'])
      sheet.setFrozenRows(1)

      // Formato de encabezados
      const header = sheet.getRange(1, 1, 1, 6)
      header.setBackground('#7c3aed')
      header.setFontColor('#ffffff')
      header.setFontWeight('bold')
    }

    const data = JSON.parse(e.postData.contents)

    sheet.appendRow([
      data.fecha   || new Date().toLocaleString('es-MX'),
      data.nombre  || '',
      data.empresa || '',
      data.unidades || '',
      data.telefono || '',
      data.email   || '',
    ])

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

// Prueba manual desde el editor: ejecuta esta función para verificar que escribe bien
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fecha: '19/02/2026, 10:00:00',
        nombre: 'Juan Pérez',
        empresa: 'Transportes Ejemplo',
        unidades: '11-30',
        telefono: '5512345678',
        email: 'juan@ejemplo.com',
      })
    }
  }
  doPost(fakeEvent)
}
