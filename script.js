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
// Menambahkan wishlist baru dengan tombol hapus
function addWish() {
    let wishInput = document.getElementById("new-wish");
    let wishList = document.getElementById("wish-list");

    if (wishInput.value.trim() !== "") {
        let newWish = document.createElement("li");
        newWish.textContent = wishInput.value;

        // Tambahkan tombol hapus di setiap wishlist
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            wishList.removeChild(newWish);
            saveWishList(); // Simpan perubahan ke localStorage
        };

        newWish.appendChild(deleteBtn);
        wishList.appendChild(newWish);
        wishInput.value = ""; // Kosongkan input setelah menambahkan

        saveWishList(); // Simpan perubahan ke localStorage
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
// Menambahkan wishlist baru dengan tombol hapus
function addWish() {
    let wishInput = document.getElementById("new-wish");
    let wishList = document.getElementById("wish-list");

    if (wishInput.value.trim() !== "") {
        let newWish = document.createElement("li");
        newWish.textContent = wishInput.value;

        // Tambahkan tombol hapus di setiap wishlist
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            wishList.removeChild(newWish);
            saveWishList(); // Simpan perubahan ke localStorage
        };

        newWish.appendChild(deleteBtn);
        wishList.appendChild(newWish);
        wishInput.value = ""; // Kosongkan input setelah menambahkan

        saveWishList(); // Simpan perubahan ke localStorage
    } else {
        alert("Masukkan wish list terlebih dahulu!");
    }
}
// *1. Fitur Tambah & Hapus Prestasi*
function addPrestasi() {
    let input = document.getElementById("new-prestasi");
    let list = document.getElementById("prestasi-list");

    if (input.value.trim() !== "") {
        let item = document.createElement("li");
        item.textContent = input.value + " ";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus Salah Satu";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list.removeChild(item);
            savePrestasi();
        };

        item.appendChild(deleteBtn);
        list.appendChild(item);
        input.value = "";

        savePrestasi();
    } else {
        alert("Masukkan prestasi terlebih dahulu!");
    }
}
// *2. Fitur Tambah & Hapus Pengalaman*
function addPengalaman() {
    let input = document.getElementById("new-pengalaman");
    let list = document.getElementById("pengalaman-list");

    if (input.value.trim() !== "") {
        let item = document.createElement("li");
        item.textContent = input.value + " ";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus Salah Satu";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list.removeChild(item);
            savePengalaman();
        };

        item.appendChild(deleteBtn);
        list.appendChild(item);
        input.value = "";

        savePengalaman();
    } else {
        alert("Masukkan pengalaman terlebih dahulu!");
    }
}

// *3. Fitur Tambah & Hapus Kegiatan Sehari-hari*
function addKegiatan() {
    let input = document.getElementById("new-kegiatan");
    let list = document.getElementById("kegiatan-list");

    if (input.value.trim() !== "") {
        let item = document.createElement("li");
        item.textContent = input.value + " ";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus Salah Satu";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list.removeChild(item);
            saveKegiatan();
        };

        item.appendChild(deleteBtn);
        list.appendChild(item);
        input.value = "";

        saveKegiatan();
    } else {
        alert("Masukkan kegiatan terlebih dahulu!");
    }
}
// *Memuat Data Prestasi dari localStorage*
function loadPrestasi() {
    let data = JSON.parse(localStorage.getItem("prestasi"));
    if (data) {
        data.forEach(text => addPrestasiFromStorage(text));
    }
}

function addPrestasiFromStorage(text) {
    let list = document.getElementById("prestasi-list");
    let item = document.createElement("li");
    item.textContent = text + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus Salah Satu";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        list.removeChild(item);
        savePrestasi();
    };

    item.appendChild(deleteBtn);
    list.appendChild(item);
}

// *Memuat Data Pengalaman dari localStorage*
function loadPengalaman() {
    let data = JSON.parse(localStorage.getItem("pengalaman"));
    if (data) {
        data.forEach(text => addPengalamanFromStorage(text));
    }
}

function addPengalamanFromStorage(text) {
    let list = document.getElementById("pengalaman-list");
    let item = document.createElement("li");
    item.textContent = text + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus Salah Satu";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        list.removeChild(item);
        savePengalaman();
    };

    item.appendChild(deleteBtn);
    list.appendChild(item);
}

// *Memuat Data Kegiatan dari localStorage*
function loadKegiatan() {
    let data = JSON.parse(localStorage.getItem("kegiatan"));
    if (data) {
        data.forEach(text => addKegiatanFromStorage(text));
    }
}

function addKegiatanFromStorage(text) {
    let list = document.getElementById("kegiatan-list");
    let item = document.createElement("li");
    item.textContent = text + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus Salah Satu";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        list.removeChild(item);
        saveKegiatan();
    };

    item.appendChild(deleteBtn);
    list.appendChild(item);
}

// *4. Panggil semua fungsi load saat halaman dibuka*
window.onload = function () {
    loadPrestasi();
    loadPengalaman();
    loadKegiatan();
    loadWishList(); // Dari kode sebelumnya
    let savedDiary = localStorage.getItem("diary");
    if (savedDiary) {
        document.getElementById("diary-content").innerHTML = savedDiary;
    }
};
document.getElementById("file-input").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("preview-image").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById("file-input").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageData = e.target.result;
            localStorage.setItem("savedImage", imageData); // Simpan gambar ke localStorage
            document.getElementById("preview-image").src = imageData;
        };
        reader.readAsDataURL(file);
    }
});

// Saat halaman dibuka, tampilkan gambar dari localStorage jika ada
window.onload = function() {
    let savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
        document.getElementById("preview-image").src = savedImage;
    }
};
function hapusFoto() {
    localStorage.removeItem("savedImage"); // Hapus dari localStorage
    document.getElementById("preview-image").src = ""; // Hapus dari tampilan
}
