/**
 * Render Web App
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('StayEase Homestay Booking')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Simpan Tempahan & Semak Double Booking
 */
function submitBooking(formData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Bookings');
    const data = sheet.getDataRange().getValues();
    
    // 1. Semak Double Booking (Berdasarkan Tarikh & Lokasi)
    // Mengelakkan tempahan pada hari yang sama untuk unit yang sama kecuali status 'Cancelled'
    const isBooked = data.some(row => {
      return row[6] === formData.tarikh && row[8] === formData.lokasi && row[11] !== 'Cancelled';
    });
    
    if (isBooked) {
      return { status: 'error', message: 'Maaf, unit ini telah ditempah untuk tarikh tersebut. Sila pilih tarikh atau unit lain.' };
    }
    
    // 2. Jana ID & Simpan Data
    const bookingId = "HM-" + Math.random().toString(36).substr(2, 6).toUpperCase();
    const timestamp = new Date();
    
    sheet.appendRow([
      bookingId,
      timestamp,
      formData.nama,
      formData.telefon,
      formData.emel,
      'Homestay',
      formData.tarikh,
      formData.masa,
      formData.lokasi,
      formData.pakej,
      formData.catatan,
      'Pending'
    ]);
    
    return { status: 'success', id: bookingId };
    
  } catch (e) {
    return { status: 'error', message: e.toString() };
  }
}

/**
 * Ambil Data untuk Admin Panel
 */
function getBookings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings');
  return sheet.getDataRange().getDisplayValues();
}

/**
 * Kemaskini Status Tempahan
 */
function updateBookingStatus(id, newStatus) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings');
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.getRange(i + 1, 12).setValue(newStatus);
      return "Status " + id + " berjaya dikemaskini ke " + newStatus;
    }
  }
  return "ID tidak dijumpai.";
}