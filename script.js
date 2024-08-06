function success(decodedText, decodedResult) {
//   le resultat du scanner si est success
    document.getElementById('qr-reader-results').innerText = `Decoded Text: ${decodedText}`;
    console.log(`Decoded Text: ${decodedText}`, decodedResult);
}
function failure(error) {
    console.warn(`QR Code scan error: ${error}`);
}
let html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(success, failure);
