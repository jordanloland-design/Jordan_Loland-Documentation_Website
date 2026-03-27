document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");

    // Store your articles here
    const articles = {
        first2026: `
            <h2>First item - 2026</h2>
            <p>This is the detailed content for the first 2026 item.</p>
        `,
        second2026: `
            <h2>Second item - 2026</h2>
            <p>Here is some second-item content for 2026.</p>
        `,
        third2026: `
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