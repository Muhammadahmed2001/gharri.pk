
var main = document.getElementById("main")

var gharriStore = {
    band: {
        tomi: {
            TomiFaceGear: {
                name: "TOMI FaceGear",
                description: "Original Tomi FaceGear Series",
                price: "Rs.3,500.00 PKR",
                frontImg: "./img/img-1-front.webp",
                backImg: "./img/img-1-back.webp"
            },
            TomiSemiRoundDial: {
                name: "TOMI - Semi Round Dial",
                description: "Water Resistant",
                price: "Rs.2,190.00 PKR",
                frontImg: "./img/img-2-front.webp",
                backImg: "./img/img-2-back.webp"
            },
            TomiLatestJaguar: {
                name: "TOMI - Latest Jaguar",
                description: "Water Resistant",
                price: "Rs.2,290.00 PKR",
                frontImg: "./img/i3-f.jpg",
                backImg: "./img/i3-b.webp"
            },
            TomiProfessionalDial: {
                name: "TOMI - Professional Dial",
                description: "Water Resistant",
                price: "Rs.2,120.00 PKR",
                frontImg: "./img/i4-f.webp",
                backImg: "./img/i4-b.webp"
            },
            TomiSemiRoundDial2: {
                name: "TOMI - Semi Round Dial",
                description: "Water Resistant",
                price: "Rs.2,190.00 PKR",
                frontImg: "./img/i5-f.webp",
                backImg: "./img/i5-b.webp"
            },
        },
        armani : {
            AR1978 : {
                name: "Emporio Armani Men’s Analogue",
                description: "Leather Strap Blue Dial 43mm",
                price: "Rs.21,233 PKR",
                frontImg: "./img/i6-f.jpg",
                backImg: "./img/i6-b.jpg"
            }
        }
    }
}

for (var category in gharriStore) {
    for (var brand in gharriStore[category]) {
        for (item in gharriStore[category][brand]) {

            main.innerHTML += `
            <div class="col">
            <div class="card">

            <img src="${gharriStore[category][brand][item].frontImg}" class="card-img-top" alt="..." />
              <img src="${gharriStore[category][brand][item].backImg}" class="card-img-top back" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${gharriStore[category][brand][item].name}</h5>
                <p class="card-text">${gharriStore[category][brand][item].description}</p>
                <h6 class="price">${gharriStore[category][brand][item].price}</h6>
              </div>
            </div>
          </div>
            `
            // console.log(gharriStore[category][brand][item].name)
        }

    }
}




