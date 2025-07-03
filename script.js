
  document.getElementById("download-resume").addEventListener("click", function (event) {
    event.preventDefault(); // Stop the download for now

    // Show alert
    const confirmDownload = confirm("Are you sure you want to download the resume?");

    // If user clicks OK, proceed with download
    if (confirmDownload) {
      window.location.href = this.href;
    }
  });



