// Menambahkan wishlist baru
function addWish() {
    let wishInput = document.getElementById("new-wish");
    let wishList = document.getElementById("wish-list");

    if (wishInput.value.trim() !== "") {
        let newWish = document.createElement("li");
        newWish.textContent = wishInput.value;
        wishList.appendChild(newWish);
        wishInput.value = ""; // Kosongkan input setelah menambahkan
    } else {
        alert("Masukkan wish list terlebih dahulu!");
    }
}

// Menyimpan catatan diary ke localStorage
function saveDiary() {
    let diaryEntry = document.getElementById("diary-entry").value;
    let diaryContent = document.getElementById("diary-content");

    if (diaryEntry.trim() !== "") {
        let diaryText = document.createElement("p");
        diaryText.textContent = diaryEntry;
        diaryContent.appendChild(diaryText);

        // Simpan ke localStorage agar tidak hilang saat refresh
        localStorage.setItem("diary", diaryContent.innerHTML);
        document.getElementById("diary-entry").value = ""; // Kosongkan input
    } else {
        alert("Tulis sesuatu di diary!");
    }
}

// Muat diary dari localStorage saat halaman dibuka
window.onload = function() {
    let savedDiary = localStorage.getItem("diary");
    if (savedDiary) {
        document.getElementById("diary-content").innerHTML = savedDiary;
    }
};
// Menghapus isi diary dari tampilan dan localStorage
function clearDiary() {
    let diaryContent = document.getElementById("diary-content");

    // Konfirmasi sebelum menghapus
    let confirmDelete = confirm("Apakah Anda yakin ingin menghapus semua catatan diary?");
    if (confirmDelete) {
        diaryContent.innerHTML = ""; // Mengosongkan tampilan diary
        localStorage.removeItem("diary"); // Menghapus dari localStorage
    }
}