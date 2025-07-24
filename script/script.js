// RESPONSIVE SIDE NAVIGATION
const toggleBtn = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');
const closeNav = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
    sideNav.classList.remove('hidden');
    
});

closeNav.addEventListener('click', () => {
    sideNav.classList.add('hidden');
});



// PARALLAX THE IMAGE IN THE FIRST SECTION
const navbar = document.getElementById('navigation-bar');
const pngLeftCorner = document.getElementById('imgLeftCorner');
const pngRightCorner = document.getElementById('imgRightCorner');
const pngSecondRight = document.getElementById('imgSecondRight');
const aboutMeImage = document.getElementById('about-me-image');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    pngLeftCorner.style.transform = `translateX(-${scrollY * 0.15}px)`;
    pngRightCorner.style.transform = `translateX(${scrollY * 0.35}px)`;
    pngSecondRight.style.transform = `translateX(${scrollY * 0.2}px)`;
    aboutMeImage.style.transform = `translateX(${scrollY * 0.1}px)`;

    if (scrollY === 0){
        navbar.classList.remove('shadow-md', 'transition-shadow', 'duration-300', 'ease-in-out');
    } else{
        navbar.classList.add('shadow-md', 'transition-shadow', 'duration-300', 'ease-in-out');
    }

});


// GREETINGS TO VISITOR
document.addEventListener('DOMContentLoaded', function () {
    const welcomeBox = document.querySelector('#welcome');

    // Show the box
    welcomeBox.classList.remove('hidden');
    setTimeout(() => {
        welcomeBox.classList.add('opacity-100');
    }, 100); // slight delay to trigger transition

    // Hide it after 5 seconds
    setTimeout(() => {
        welcomeBox.classList.remove('opacity-100');
        setTimeout(() => {
            welcomeBox.classList.add('hidden');
        }, 500); // wait for fade-out to finish before hiding
    }, 3000); // 5 seconds visible
});


// FULL SCREEN IMAGE WHEN CLICKED
fullScreenImage = document.getElementById('full-screen-modal');

const openModal = (fullImage) => {
    fullScreenImage.classList.remove('hidden');
    fullScreenImage.innerHTML = 
    `
    
    <div class="max-w-sm p-6 relative mt-10">
        <!-- Close Button -->
        <button onclick="closeModal()" class="absolute cursor-pointer text-gray-500 top-9 right-9 hover:text-black text-xl"><span class="bg-white rounded-full px-2">&times;<span></button>
        <img src="${fullImage}" class="w-full h-full rounded-lg shadow-xl" alt="">
    </div>

    `;
  }

const closeModal = () => {
    fullScreenImage.classList.add('hidden');
  }

