function showMessage() {
    alert("Taqabbalallahu minna wa minkum. Semoga Allah menerima amal ibadah kita. Selamat Hari Raya Idul Fitri!");
}
// Simpan catatan ke local storage
function saveNote() {
    let noteText = document.getElementById("noteInput").value;
    localStorage.setItem("savedNote", noteText);
    displayNote();
}

// Hapus catatan dari local storage
function clearNote() {
    localStorage.removeItem("savedNote");
    document.getElementById("savedNote").innerText = "";
    document.getElementById("noteInput").value = "";
}

// Menampilkan catatan yang sudah disimpan
function displayNote() {
    let savedText = localStorage.getItem("savedNote");
    if (savedText) {
        document.getElementById("savedNote").innerText = "Catatan Anda: " + savedText;
    }
}

// Menjalankan fungsi untuk menampilkan catatan saat halaman dimuat
window.onload = displayNote;