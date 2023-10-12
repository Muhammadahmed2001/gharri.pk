var main = document.getElementById("main");

var gharriStore = {
  band: {
    tomi: {
      TomiFaceGear: {
        name: "TOMI FaceGear",
        description: "Original Tomi FaceGear Series",
        price: "Rs.3,500.00 PKR",
        frontImg: "./img/img-1-front.webp",
        backImg: "./img/img-1-back.webp",
      },
      TomiSemiRoundDial: {
        name: "TOMI - Semi Round Dial",
        description: "Water Resistant",
        price: "Rs.2,190.00 PKR",
        frontImg: "./img/img-2-front.webp",
        backImg: "./img/img-2-back.webp",
      },
      TomiLatestJaguar: {
        name: "TOMI - Latest Jaguar",
        description: "Water Resistant",
        price: "Rs.2,290.00 PKR",
        frontImg: "./img/i3-f.jpg",
        backImg: "./img/i3-b.webp",
      },
      TomiProfessionalDial: {
        name: "TOMI - Professional Dial",
        description: "Water Resistant",
        price: "Rs.2,120.00 PKR",
        frontImg: "./img/i4-f.webp",
        backImg: "./img/i4-b.webp",
      },
      TomiSemiRoundDial2: {
        name: "TOMI - Semi Round Dial",
        description: "Water Resistant",
        price: "Rs.2,190.00 PKR",
        frontImg: "./img/i5-f.webp",
        backImg: "./img/i5-b.webp",
      },
    },
    armani: {
      AR1978: {
        name: "Emporio Armani Men’s Analogue",
        description: "Leather Strap Blue Dial 43mm",
        price: "Rs.21,233 PKR",
        frontImg: "./img/i6-f.jpg",
        backImg: "./img/i6-b.jpg",
      },
      AX2101: {
        name: "Armani Exchange Men’s",
        description: "Leather Band 46mm Watch",
        price: "Rs.6,000 PKR",
        frontImg: "./img/i7-f.jpg",
        backImg: "./img/i7-b.jpg",
      },
      AX2100: {
        name: "Armani Exchange Men’s",
        description: "Silicone Strap White Dial 47mm",
        price: "Rs.7,200 PKR",
        frontImg: "./img/i8-f.jpg",
        backImg: "./img/i8-b.jpg",
      },
      AX2134: {
        name: "Armani Exchange Men’s",
        description: "Leather Band White Dial 46mm",
        price: "Rs.5,800 PKR",
        frontImg: "./img/i9-f.jpg",
        backImg: "./img/i9-b.jpg",
      },
      AX2133: {
        name: "Armani Exchange Men’s",
        description: "Quartz Brown Leather Strap Blue Dial 46mm",
        price: "Rs.8,200 PKR",
        frontImg: "./img/i10-f.jpg",
        backImg: "./img/i10-b.jpg",
      },
    },
    calvinKlein: {
      K3M211C3: {
        name: "Calvin Klein Men’s",
        description: "Swiss Made Quartz Black Leather Strap Grey Dial 40mm",
        price: "Rs.30,000 PKR",
        frontImg: "./img/i11-f.jpg",
        backImg: "./img/i11-b.jpg",
      },
      K9N111VN: {
        name: "Calvin Klein Men’s",
        description: "Quartz Leather Strap Blue Dial 39mm",
        price: "Rs.23,000 PKR",
        frontImg: "./img/i12-f.jpg",
        backImg: "./img/i12-b.jpg",
      },
      K2Y231C3: {
        name: "Calvin Klein Women’s",
        description: "Swiss Made Quartz Black Leather Strap Black Dial 32mm",
        price: "Rs.32,000 PKR",
        frontImg: "./img/i13-f.jpg",
        backImg: "./img/i13-b.jpg",
      },
      K3M221CS: {
        name: "Calvin Klein Women’s",
        description: "Swiss Made Quartz Black Leather Strap Black Dial 35mm",
        price: "Rs.29,000 PKR",
        frontImg: "./img/i14-f.jpg",
        backImg: "./img/i14-b.jpg",
      },
    },
    Fossil: {
      FS5735: {
        name: "Fossil Men’s",
        description: "Chronograph Quartz Leather Strap Green Dial 44mm",
        price: "Rs.19,500 PKR",
        frontImg: "./img/i16-f.jpg",
        backImg: "./img/i16-b.jpg",
      },
      FS4918: {
        name: "Fossil Men’s",
        description: "Chronograph Quartz Leather Strap Green Dial 44mm",
        price: "Rs.19,500 PKR",
        frontImg: "./img/i17-f.jpg",
        backImg: "./img/i17-b.jpg",
      },
      BQ2126: {
        name: "Fossil Men’s",
        description: "Quartz Leather Strap Blue Dial 45mm",
        price: "Rs.19,933 PKR",
        frontImg: "./img/i18-f.webp",
        backImg: "./img/i18-b.jpg",
      },
      ME3170: {
        name: "Fossil Men’s",
        description: "Automatic Leather Strap Black Dial 44mm",
        price: "Rs.31,460 PKR",
        frontImg: "./img/i19-f.jpg",
        backImg: "./img/i19-b.jpg",
      },
      FS5169: {
        name: "Fossil Men’s",
        description: "Chronograph Quartz Leather Strap Silver Dial 44mm",
        price: "Rs.19,500 PKR",
        frontImg: "./img/i20-f.jpg",
        backImg: "./img/i20-b.jpg",
      },
    },
  },
  chain: {
    diesel: {
      DZ4324: {
        name: "Diesel Men’s",
        description: "Chronograph Quartz Stainless Steel Black",
        price: "Rs.9,000 PKR",
        frontImg: "./img/i21-f.jpg",
        backImg: "./img/i21-b.jpg",
      },
      DZ1729: {
        name: "Diesel Men’s",
        description: "Quartz Silver Stainless Steel Grey Dial 46mm",
        price: "Rs.24,093 PKR",
        frontImg: "./img/i22-f.png",
        backImg: "./img/i22-b.png",
      },
      DZ4360: {
        name: "Diesel Men’s",
        description: "Quartz Gold Stainless Steel Gold Dial 53mm",
        price: "Rs.24,960 PKR",
        frontImg: "./img/i23-f.png",
        backImg: "./img/i23-b.png",
      },
      DZ7333: {
        name: "Diesel Men’s",
        description:
          "Quartz Gold Stainless Steel Black Dial 57mm (Four Time zone)",
        price: "Rs.36,000 PKR",
        frontImg: "./img/i24-f.webp",
        backImg: "./img/i24-b.png",
      },
      DZ4328: {
        name: "Diesel Men’s",
        description: "Silver Tone Stainless Steel Black Dial",
        price: "Rs.9,000 PKR",
        frontImg: "./img/i25-f.jpg",
        backImg: "./img/i25-b.jpg",
      },
    },
  },
};

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
            `;
    }
  }
}

var company = document.getElementById("company");
var brand = document.getElementById("brand");
company.innerHTML = `<option>Select Company</option>`;
brand.innerHTML = `<option>Select Watch Code</option>`;

for (var category in gharriStore) {
  for (var companyName in gharriStore[category]) {
    company.innerHTML += `
        <option value="${companyName}">${companyName.toUpperCase()}</option>
        `;
  }
}

function selectCompany() {
  brand.innerHTML = "";
  brand.innerHTML = `<option>Select Watch Code</option>`;
  for (var category in gharriStore) {
    for (var itemCode in gharriStore[category][company.value])
      brand.innerHTML += `
    <option value="${itemCode}">${itemCode}</option>
    `;
  }
}

function filterWatch() {
  console.log(company.value, brand.value);
  for (var category in gharriStore) {
    console.log(gharriStore[category][company.value][brand.value]);
  }
}
