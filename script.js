// script.js
function searchFood() {
    const input = document.getElementById('searchInput').value.trim();
    if (input) {
        alert(`Searching for: ${input}`);
    } else {
        alert('Please enter a food item to search.');
    }
}


// -----------------------------



const items = [
    { name: "Home made pizza", price: "₹190", discount: "50%", img: "images/i1.png" ,rating:"4.5" , time:"50-70 min" , q:"1"},
    { name: "Tandoori Chicken", price: "₹184", discount: "20%", img: "images/i9.png",rating:"4.5", time:"50-70 min"  ,q :"0"},
    { name: "Chilli Chicken", price: "₹116", discount: "50%", img: "images/i10.png",rating:"4.5",time:"50-70 min",q :"0" },
    { name: "Paneer Tikka", price: "₹150", discount: "30%", img: "images/i2.png",rating:"4.5" ,time:"50-70 min"  ,q :"0"},
    { name: "Veg Burger", price: "₹90", discount: "15%", img: "images/i3.png",rating:"4.5", time:"50-70 min" ,q :"0"},
    { name: "Grilled Sandwich", price: "₹110", discount: "25%", img: "images/i4.png",rating:"4.5",time:"50-70 min",q :"0" },
    { name: "Chicken Biryani", price: "₹200", discount: "10%", img: "images/i5.png" ,rating:"4.5" ,time:"50-70 min",q :"0"},
    { name: "Pasta", price: "₹130", discount: "20%", img: "images/i6.png",rating:"4.5"  ,time:"50-70 min",q :"0"},
    { name: "French Fries", price: "₹70", discount: "5%", img: "images/i7.png",rating:"4.5" , time:"50-70 min",q :"0" },
    { name: "Momos", price: "₹80", discount: "20%", img: "images/i8.png",rating:"4.5"  , time:"50-70 min",q :"0"},
    { name: "Spring Rolls", price: "₹100", discount: "30%", img: "images/i1.png",rating:"4.5" ,time:"50-70 min",q :"0" },
    { name: "Chocolate Cake", price: "₹250", discount: "40%", img: "images/i9.png",rating:"4.5" ,time:"50-70 min",q :"0"},
  ];
  
  let currentIndex = 0;
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  function renderCards() {
    carousel.innerHTML = "";
  
    const visibleItems = items.slice(currentIndex, currentIndex + 3);
  
    visibleItems.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      if (index === 1) card.classList.add("center");
  
      card.innerHTML = `

      
    <div class="image-container">
        <span class="discount-badge">${item.discount}</span>
        <img src="${item.img}" alt="Home made pizza">
    </div>
    <div class="food-info">
        <h3>${item.name}</h3>
        <span class="price">${item.price}</span>
    </div>
    <div class="food-details">
        <div class="ratings">${item.rating}</div>
        <div class="delivery-time">${item.time}</div>
        <button class="add-btn">-</button>
        <p>${item.q}</p>
        <button class="add-btn">+</button>
       </div>
    
        
      `;
  
      carousel.appendChild(card);
    });
  
    updateButtons();
  }
  
  function updateButtons() {
    prevBtn.classList.toggle("disabled", currentIndex === 0);
    nextBtn.classList.toggle("disabled", currentIndex >= items.length - 3);
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCards();
    }
  }
  
  function nextSlide() {
    if (currentIndex < items.length - 3) {
      currentIndex++;
      renderCards();
    }
  }
  
  function requestDish() {
    const centerCard = document.querySelector(".card.center h3").innerText;
    alert(`You have selected: ${centerCard}`);
  }
  
  // Initial render
  renderCards();



  // fgcxhdxgxfzdfzfhz

  window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('foodVideo');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    const updateButtons = () => {
        if (video.paused) {
            playButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
        } else {
            playButton.classList.add('hidden');
            pauseButton.classList.remove('hidden');
        }
    };

    // Play video
    playButton.addEventListener('click', () => {
        video.play();
        updateButtons();
    });

    // Pause video
    pauseButton.addEventListener('click', () => {
        video.pause();
        updateButtons();
    });

    // Show play button when video ends
    video.addEventListener('ended', updateButtons);

    // Initialize buttons on load
    updateButtons();
});



// 897797897887787887

const cartPopup = document.getElementById("cartPopup");

function openCart() {
    cartPopup.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeCart() {
    cartPopup.style.display = "none";
    document.body.style.overflow = "auto";
}

// Attach click event to the cart icon
document.querySelector(".icons a[href='#'] img[alt='Cart']").addEventListener("click", openCart);

  
// 21345678

const requestPopup = document.getElementById('requestPopup');

// Show popup
document.querySelector('.request-btn').addEventListener('click', () => {
    requestPopup.classList.add('active');
});

// Close popup
function closeRequestPopup() {
    requestPopup.classList.remove('active');
}
