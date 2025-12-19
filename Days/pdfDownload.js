// pdfDownload.js
document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("pdfDownload");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", function() {
        // Open browser print dialog
        window.print();
    });
});
