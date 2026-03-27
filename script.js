document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");

    // Store your articles here
    const articles = {
        home: `
            <h2>Welcome to my website!</h2>
            <p>Welcome to my website! This is a personal documentation site to share and store all my engineering projects.
            Here, you can find my projects, notes, and any other content related to my engineering journey, feel free to explore 
            and check back often for insights into my engineering endevors.</p>
            <h2>About Me</h2>
            <p>My name is Jordan Loland, and I am currently studying electrical engineering at the University of Victoria. I chose this path
            becuase of my passion for creating, experimenting, and learning new skills. I have experience in circuit design, programming, motor drives,
            microcontrollers, and more.</p>
        
        `,
        homelab: `
            <h2>Homelab Setup</h2>
            <p>Jordan Loland<br>Written 2026/03/27<p>
            <h3>Introduction</h3>
            <p>I first was introduced to the idea of homelabbing when running out of space in my free google drive. Searching for other services that could
            host my data for cheaper I stumbled down the rabbit hole of homelabbing. This intrigued me as I already had an old mini pc (Intel NUC 2017)
            sitting collecting dust in my room. This combination of frustration and cheapness led me to my new project and hobby of homelabbing</p>
        `,
        'temperature sensor': `
            <h2>Second item - 2026</h2>
            <p>Here is some second-item content for 2026.</p>
        `,
        website: `
            <h2>Third item - 2026</h2>
            <p>Content for the third item goes here.</p>
        `
        // Add more articles here
    };

    // Click handler for sidebar links
    document.querySelectorAll("[data-article]").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const key = link.getAttribute("data-article");

            if (articles[key]) {
                contentArea.innerHTML = articles[key];
                window.scrollTo(0,0);
            } else {
                contentArea.innerHTML = `<p>Content not found.</p>`;
            }
        });
    });
});