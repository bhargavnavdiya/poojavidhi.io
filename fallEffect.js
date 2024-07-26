// document.addEventListener('DOMContentLoaded', () => {
//     const snowContainer = document.querySelector('.snow-container');
//     let snowflakesCount; // Set a fixed number of flower images
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 600) {
//         snowflakesCount = 20; // Fewer flowers for small screens
//     } else if (screenWidth < 1200) {
//         snowflakesCount = 50; // Moderate number of flowers for medium screens
//     } else {
//         snowflakesCount = 100; // Full number of flowers for large screens
//     }

//     for (let i = 0; i < snowflakesCount; i++) {
//         const flower = document.createElement('img');
//         flower.classList.add('flower');
//         flower.src = 'resources/flower.png'; // Replace with the path to your flower image

//         // Random horizontal position
//         flower.style.left = `${Math.random() * 100}%`;

//         // Random size
//         const size = `${Math.random() * 20 + 20}px`; // size between 20px and 40px
//         flower.style.width = size;
//         flower.style.height = size;

//         // Random animation duration and delay
//         flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
//         flower.style.animationDelay = `${Math.random() * 5}s`;

//         // Randomize the horizontal movement
//         flower.style.setProperty('--random-x', Math.random());

//         // Randomize opacity to create different shades of white
//         const opacity = Math.random() * 0.5 + 0.5; // between 0.5 and 1
//         flower.style.opacity = opacity;

//         // Append flower to container
//         snowContainer.appendChild(flower);
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');

    // Function to create and animate flowers
    const createFlowers = (count) => {
        // Clear existing flowers
        snowContainer.innerHTML = '';

        for (let i = 0; i < count; i++) {
            const flower = document.createElement('img');
            flower.classList.add('flower');
            flower.src = 'resources/flower.png'; // Replace with the path to your flower image

            // Random horizontal position
            flower.style.left = `${Math.random() * 100}%`;

            // Random size
            const size = `${Math.random() * 20 + 20}px`; // size between 20px and 40px
            flower.style.width = size;
            flower.style.height = size;

            // Random animation duration and delay
            flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
            flower.style.animationDelay = `${Math.random() * 5}s`;

            // Randomize the horizontal movement
            flower.style.setProperty('--random-x', Math.random());

            // Randomize opacity to create different shades of white
            const opacity = Math.random() * 0.5 + 0.5; // between 0.5 and 1
            flower.style.opacity = opacity;

            // Append flower to container
            snowContainer.appendChild(flower);
        }
    };

    // Function to determine flower count based on screen width
    const determineFlowerCount = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 600) {
            return 7; // Fewer flowers for small screens
        } else if (screenWidth < 1200) {
            return 15; // Moderate number of flowers for medium screens
        } else {
            return 30; // Full number of flowers for large screens
        }
    };

    // Initial creation of flowers
    createFlowers(determineFlowerCount());

    // Add event listener for window resize
    window.addEventListener('resize', () => {
        createFlowers(determineFlowerCount());
    });
});