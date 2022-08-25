function loadPhotos() {
    fetch('../../photos.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('photos').innerHTML = "";
  
        const json = JSON.stringify(data.photos);
        const result = JSON.parse(json);
  
        for (let i = 0; i < result.length; i++) {
          document.getElementById('photos').innerHTML += `
            <div class="card">
            <img src="${result[i].img}" alt="gambar">
            <div class="card-body">
                <h4>${result[i].name}</h4>
                <p>${result[i].description}</p>
            </div>
        </div>
        `;
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  
  loadPhotos();