// Show toast message
console.log("achievements.js is loaded");



function showAchievement(message) {
    const toast = document.getElementById('achievement-toast');
    toast.textContent = `Achievement Unlocked: ${message}`;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500); // wait for fade out
    }, 8000);
}

// Unlock achievement with optional display message
function unlockAchievement(key, displayName = key) {
    const achievements = JSON.parse(localStorage.getItem('achievements')) || {};

    if (!achievements[key]) {
        achievements[key] = true;
        localStorage.setItem('achievements', JSON.stringify(achievements));
        showAchievement(displayName);
    }
}

// First-time visit check
if (!localStorage.getItem('visitedBefore')) {
    localStorage.setItem('visitedBefore', 'true');
   // unlockAchievement('firstVisit', 'First Visit!');
} else {
    //document.getElementById('message').textContent = "Welcome back!";
}

function displayAchievementsList() {
    const container = document.getElementById('achievement-list');
    const achievements = JSON.parse(localStorage.getItem('achievements')) || {};

    // Clear old entries (in case this is re-called)
    container.innerHTML = '';

    // Add each unlocked achievement
    for (const [key, unlocked] of Object.entries(achievements)) {
        if (unlocked) {
            const div = document.createElement('div');
            div.className = 'achievement-box';
            div.textContent = formatAchievementName(key);
            container.appendChild(div);
        }
    }
}

// Optional: format key into a readable label
function formatAchievementName(key) {
    return key
        .replace(/([A-Z])/g, ' $1')      // camelCase → spaced
        .replace(/^./, c => c.toUpperCase()); // Capitalise first letter
}

// Call this when you want to display the list (e.g., when page loads)
window.addEventListener("DOMContentLoaded", () => {
    displayAchievementsList();
    console.log("Displaying achievements");

});

