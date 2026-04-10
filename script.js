//script.js
//handles all 

document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");

    // Store articles here
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
            host my data for cheaper I stumbled down the rabbit hole of homelabbing. This intrigued me as I already had an old mini pc (NUC6CAYS)
            sitting collecting dust in my room. This combination of frustration and cheapness led me to my new project and hobby of homelabbing</p>
            <h3>Hardware</h3>
            <figure>
                <img src="NUC.jpg" width="50%" alt="content failed to load">
                <figcaption> Intel NUC used in my homelab </figcaption>
            </figure>
            <p>2gb DDR3L RAM, Intel Celeron J3455 quad-core processor, and 32gb eMMC sotrage, admittedly very poor specs for a proper homelab setup, but for my purposes
            it is adequate. For future I may look at upgrading components, but it may be worth it to get a whole new system entirely and use this one as a node running
            less intensive programs. The biggest advantage of the NUC is its very low power consumtion. From my measurements, under normal operation it draws as little 
            as 7 watts.</p>
            <h3>Software</h3>
            <p>My homelab runs on proxmox. I decided on proxmox due to it being open source, and its immense number of features. So far I only have one VM hosting
            Homeassistant, and a samba server for file hosting and organizaton, but soon to be more. My next project is going to be adding a media server like Jellyfin,
            though I am going to need an external SSD or maybe configure a different machine into a NAS for its storage demands.</p>
        `,
        'temperature sensor': `
            <h2>Second item - 2026</h2>
            <p>Here is some second-item content for 2026.</p>
        `,
        pedal: `
            <h2>Website</h2>
            <p>Jordan Loland<br>Written 2026/04/## TODO<p>
            <h3>Introduction</h3>
        `,
        website: `
            <h2>Website</h2>
            <p>Jordan Loland<br>Written 2026/04/## TODO<p>
            <h3>Introduction</h3>
            <p>This website you are looking at! For a long while I was looking for a way of documenting</p>
        `,
        aero:`
            <h2>UVIC Aero</h2>
            <p>Jordan Loland<br>Written 2026/04/## TODO<p>
            <h3>Introduction</h3>
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