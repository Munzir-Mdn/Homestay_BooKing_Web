# 🏠 Homestay Booking System (Google Apps Script)

Sistem tempahan homestay berasaskan web yang moden, responsif, dan ringan. Sistem ini menggunakan **Google Apps Script (GAS)** sebagai backend dan **Google Sheets** sebagai pangkalan data utama.

---

## ✨ Ciri-Ciri Utama
- **Frontend Moden:** Antaramuka bersih menggunakan Tailwind CSS.
- **Mobile Responsive:** Sesuai dipaparkan di telefon pintar, tablet, dan desktop.
- **Semakan Slot (Anti-Double Booking):** Menghalang tempahan bertindih pada tarikh dan unit yang sama.
- **Booking ID Automatik:** Menjana ID unik untuk setiap pelanggan (cth: `HM-X7A2B`).
- **Admin Dashboard:** Panel pengurusan untuk melihat, menapis, dan mengemaskini status tempahan.
- **Status Tempahan:** Urus status antara `Pending`, `Confirmed`, `Cancelled`, atau `Completed`.

---

## 🛠️ Stack Teknologi
- **Backend:** Google Apps Script
- **Database:** Google Sheets
- **Frontend:** HTML5, JavaScript (Vanilla), Tailwind CSS

---

## 📋 Persediaan Google Sheets
Bina satu Google Sheet baru, namakan tab pertama sebagai `Bookings`, dan sediakan baris tajuk (Header) seperti berikut:

| A | B | C | D | E | F | G | H | I | J | K | L |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BookingID** | **Timestamp** | **Nama** | **Telefon** | **Emel** | **Servis** | **Tarikh** | **Masa** | **Lokasi** | **Pakej** | **Catatan** | **Status** |

---

## ⚙️ Langkah Pemasangan

1. **Buka Google Sheets:** Cipta fail baru mengikut struktur di atas.
2. **Buka Apps Script:** Klik menu `Extensions` > `Apps Script`.
3. **Tambah Kod Backend:**
   - Salin isi fail `Code.gs` dan tampal (paste) ke dalam editor `Code.gs` di Apps Script.
4. **Tambah Kod Frontend:**
   - Klik butang `+` > `HTML`, namakan fail sebagai `Index`.
   - Salin isi fail `Index.html` dan tampal ke dalamnya.
5. **Deployment:**
   - Klik butang **Deploy** > **New Deployment**.
   - Pilih jenis: **Web App**.
   - Set **Execute as:** `Me`.
   - Set **Who has access:** `Anyone`.
   - Klik **Deploy** dan salin URL Web App yang diberikan.

---

## 📂 Struktur Fail
- `Code.gs` - Logik pelayan (Server-side logic) termasuk fungsi simpan data dan semakan slot.
- `Index.html` - Antaramuka pengguna (Client-side) termasuk Borang Tempahan dan Admin Panel.

---

## 🧪 Cara Pengujian
1. Buka URL Web App anda.
2. Masukkan maklumat tempahan pada tarikh tertentu.
3. Cuba buat tempahan sekali lagi pada tarikh yang sama untuk unit yang sama — sistem akan memaparkan ralat (Double Booking prevented).
4. Klik tab **Admin** untuk melihat data tempahan dan cuba kemaskini status tempahan tersebut.

---

## 🚀 Cadangan Penambahbaikan
- [ ] **Notifikasi Emel:** Hantar emel pengesahan automatik menggunakan `GmailApp`.
- [ ] **WhatsApp Integration:** Tambah butang "Chat Admin" untuk pengesahan pantas.
- [ ] **Login Admin:** Tambah sistem kata laluan untuk akses ke Admin Dashboard.
- [ ] **Payment Gateway:** Integrasi ToyyibPay atau Billplz untuk bayaran deposit.

---

## 📄 Lesen
Projek ini adalah sumber terbuka di bawah [MIT License](LICENSE).

---

**Dibangunkan dengan ❤️ menggunakan Google Apps Script.**