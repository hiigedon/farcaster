// public/snake.js

// ... (Kode Game Ular Lainnya) ...

// Logika Game Over yang Diperbarui
function gameOver() {
    isPlaying = false;
    clearInterval(gameLoopInterval);
    
    alert(`Game Over! Skor Akhir Anda: ${score}`);
    
    // Panggil fungsi untuk mengirim skor ke server
    sendScoreToServer(score);

    // Opsi: Reset Game atau Simpan High Score
}

// Fungsi BARU: Mengirim skor ke Server (Endpoint Baru yang harus Anda buat di server.js)
function sendScoreToServer(finalScore) {
    const URL_SKOR = '/api/save-score'; // Endpoint baru di server.js

    fetch(URL_SKOR, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: finalScore })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Skor berhasil dikirim ke server:', data);
        // Di sini Anda bisa menampilkan pesan 'Skor Tersimpan'
    })
    .catch(error => {
        console.error('Gagal mengirim skor:', error);
    });
}

// ... (Kode Game Ular Lainnya) ...
