// Mendapatkan elemen input dan container list dari DOM
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fungsi untuk menambahkan tugas ke dalam list
function addTask(){
    // Mengecek apakah input kosong
    if(inputBox.value === ''){  
        alert("you must write something!"); // Menampilkan alert jika input kosong

    }
    else{
        let li = document.createElement("li"); // Membuat elemen list item baru
        li.innerHTML = inputBox.value; // Mengisi elemen list item dengan nilai input
        listContainer.appendChild(li); // Menambahkan list item ke dalam container list
        let span = document.createElement("span"); // Membuat elemen span untuk tombol hapus
        span.innerHTML = "\u00d7"; // Mengisi elemen span dengan simbol "×"
        li.appendChild(span); // Menambahkan span ke dalam list item
    }
    inputBox.value = ""; // Mengosongkan nilai input setelah menambahkan tugas
    saveData(); // Menyimpan data list ke localStorage
}

// Menambahkan event listener ke container list
listContainer.addEventListener("click", function(e){
    // Mengecek apakah elemen yang diklik adalah list item (LI)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  // Menambahkan atau menghapus kelas "checked" untuk menandai tugas selesai
        saveData(); // Menyimpan data list ke localStorage
    }
    // Mengecek apakah elemen yang diklik adalah span (tombol hapus)
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // Menghapus list item (parent element dari span) dari container list
        saveData(); // Menyimpan data list ke localStorage
    }
}, false);

// Fungsi untuk menyimpan data list ke localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Menyimpan HTML dari container list ke localStorage dengan key "data"
}

// Fungsi untuk menampilkan tugas yang tersimpan di localStorage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Mengambil data dari localStorage dan mengisinya ke dalam container list
}
showTask(); // Memanggil fungsi showTask untuk menampilkan tugas saat halaman dimuat
