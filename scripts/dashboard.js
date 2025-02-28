// SOS Button Functionality
const sosButton = document.getElementById('sosButton');
const emergencyAlert = document.getElementById('emergencyAlert');

sosButton.addEventListener('click', () => {
    emergencyAlert.style.display = 'block';
    setTimeout(() => {
        emergencyAlert.style.display = 'none';
    }, 5000);
});

// Sign Out Functionality
const signOutButton = document.getElementById('signOutButton');

signOutButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Google Maps Integration
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: userLocation,
            });
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "You are here",
            });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}