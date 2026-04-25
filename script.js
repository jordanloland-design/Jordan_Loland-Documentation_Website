//script.js
//handles all interactive features

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
            <p>Jordan Loland<br>Written 2026/03/27</p>
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
            <h2>Temperature Sensor</h2>
            <p>Jordan Loland <br> Written 2026/04/23</p>
            <h3>Introduction</h3>
            <p>This project ties in with my Homelab setup, particularly Homeassistant. This project was created to solve a particular problem I have during winter. If I leave 
            for school and keep my window shut, when I get back my room is stuffy and hot, alternatively, if I leave my window open while at school, when I return my room 
            is ice cold. My solution was an ESP32 based Wi-Fi temperature and humidity sensor integrated with Homeassistant to monitor and automate window opening and closing,
            the following is doucmentation of the process.</p>
            <h3>Parts List</h3>
            <table>
            <tbody>
            <tr><th>Part</th><th>Cost</th><th>Quantity</th><th>Link</th></tr>
            <tr><td>AHT20+BMP280 Temperature, pressure, and humidity sensor</td><td>$3.55</td><td>1</td><td><a href="https://www.aliexpress.com/item/1005009495809337.html?spm=a2g0o.productlist.main.2.29af53af7hBdtT&algo_pvid=29856793-769d-45ef-b856-f1e1c5bd4df9&algo_exp_id=29856793-769d-45ef-b856-f1e1c5bd4df9-1&pdp_ext_f=%7B%22order%22%3A%22283%22%2C%22spu_best_type%22%3A%22price%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21CAD%219.42%213.31%21%21%2146.00%2116.16%21%4021032f3717769788951084942e3bca%2112000049279743827%21sea%21CA%216768298602%21ABX%211%210%21n_tag%3A-29910%3Bd%3Aab7acfe6%3Bm03_new_user%3A-29895%3BpisId%3A5000000204872240&curPageLogUid=7R8ve9sTMoRO&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005009495809337%7C_p_origin_prod%3A">AHT20+BMP280 Aliexpress</a></td></tr>
            <tr><td>ESP32 WROOM-32 Development Board TYPE-C CH340C/ CP2102 </td><td>$3.88</td><td>1</td><td><a href="https://www.aliexpress.com/item/1005005953505528.html?spm=a2g0o.productlist.main.1.c6a774047Seq3g&algo_pvid=cbc93c96-7864-4887-8bcb-c7d34a002651&algo_exp_id=cbc93c96-7864-4887-8bcb-c7d34a002651-0&pdp_ext_f=%7B%22order%22%3A%2220149%22%2C%22spu_best_type%22%3A%22price%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21CAD%215.83%211.59%21%21%2128.49%217.79%21%402101eede17769805864105450e34e9%2112000035007650505%21sea%21CA%216768298602%21ABX%211%210%21n_tag%3A-29910%3Bd%3Aab7acfe6%3Bm03_new_user%3A-29895%3BpisId%3A5000000203581376&curPageLogUid=ssscVs3PK4Pr&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005005953505528%7C_p_origin_prod%3A">ESP32 Dev Board Aliexpress</a></td></tr>
            <tr><td>400-Point Breadboard Kit Dupont Cable Jumper Wire</td><td>$3.99</td><td>1</td><td><a href = "https://www.aliexpress.com/item/1005006293202863.html?spm=a2g0o.productlist.main.21.6b605fbaJt9B9i&algo_pvid=db815ab2-223c-451f-8d0f-c4a78593964e&algo_exp_id=db815ab2-223c-451f-8d0f-c4a78593964e-20&pdp_ext_f=%7B%22order%22%3A%2232%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21CAD%2114.37%213.35%21%21%2170.19%2116.37%21%40210328c017769809349347908eb74e%2112000036639371043%21sea%21CA%216768298602%21ABX%211%210%21n_tag%3A-29910%3Bd%3Aab7acfe6%3Bm03_new_user%3A-29895%3BpisId%3A5000000204872240&curPageLogUid=nbKRgOIcMy3i&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005006293202863%7C_p_origin_prod%3A">Breadboard & Jumper Wires Kit Aliexpress</a></td></tr>
            </tbody>
            </table>
            <h3>Setup</h3>
            <figure>
                <img src="TempSens.jpg" width="50%" alt="content failed to load">
                <figcaption>Sensor Breadboard Wiring</figcaption>
            </figure>
            <p>To build this I used ESPHome, an add on in the homeassistant app to allow communication between ESP32 output and my homelab. Once given the board and sensor specifications,
            I wired the sensor to the board. This sensor uses I2C protocol so I connected the serial data, and serial clock to the corresponding pins on the ESP32, along with ground and 
            3.3V. I then plugged the ESP32 board to flash the software onto it, making it work as a sensor in homeassistant. Once flashed I was able to unplug it and put it into a corner
            of my room to sit and record temperature wirelessly.</p>
            <h3>Problems & Troubleshooting</h3>
            <p>One issue that I faced in the begining of this project was readings consistatnly 5-7&degC higher than expected. At first I thought it might be a problem with the board I 
            purchased, as it was just the cheapest one I could find on aliexpress, but before spending more time and money waiting for a replacement I tried some other tests.
            I used the temperature sensor on my multimeter and found that the ESP32 was producing a lot of heat. My original wiring had the sensor right next to the ESP32, causing it to pick up
            the heat of the ESP32. A simple solution was to move the sensor farther away from the ESP32 on the Breadboard. After the change the readings fell to expected levels</p>
            <h3>Results</h3>
            <p>TODO add screenshots from Homeassistant app</p>
            <h3>Future Work / Still in Progress</h3>
            <p>Currently I have only got this project to the stage of acting as a sensor, now I need to design something capabe of opening and closing my window. I have done some looking
            into different solutions to automate this. The one I am currently persuing is to 3D print an aparatus to hold a threaded screw with another 3d printed block fixed to both the
            screw and the window. Then when a certain threshold is hit, the ESP32 will send a signal to a motor driver connected to a stepper motor that will spin the rod, opening or 
            closing the window.</p>
        `,
        pedal: `
            <h2>Breadboarded Guitar Pedal</h2>
            <p>Jordan Loland<br>Written 2026/04/## TODO</p>
            <h3>Introduction</h3>
            <p></p>
            <h3>componenets list</h3>
            <p>TODO finish add pics and parts list</p>
        `,
        website: `
            <h2>Website</h2>
            <p>Jordan Loland<br>Written 2026/04/22</p>
            <h3>Introduction</h3>
            <p>This website you are looking at! For a long while I was looking for a way of documenting my projects in a fun and interactive way. I wasn't a huge fan of
            Linkdin, and github was too tailored to software for my needs, so I finally landed on making my own website. I've enjoyed the challenge of learning HTML, 
            Javascript, and CSS to have full creative control of my portfolio's layout and feel.</p>
            <h3>Self Leaning New Languages</h3>
            <p>For this project I built everything with CSS, Javascript, and HTML by hand, which meant a lot of self learning to learn the languages. For CSS and HTML,
            I used W3School's open source lessons to develop enough knowledge to put this website together. I found these to be really helpful because each chapter had 
            an interactive recap at the end that would have you building something based on what you learned. Javascript was slightly easier to pick up as I had taken a 
            class on Java. The similar syntax was easy to pick up on, but the frontend web development part was foreign to me. Since what I wanted for my website had very
            minimal interactive features, I ended up mostly using stack overflow to cobble together something functional using what I observed on other's posts TODO*site needed*.
            Overall, learning these new languages was a ton of fun and a good way to figure out how to self learn. I am proud of the speed I was able to pick these up 
            and am looking forward to using these skills in future projects.
            <h3>Self Hosting and Challenges</h3>
            <p>TODO</p>
        `,
        aero:`
            <h2>UVIC Aero</h2>
            <p>Jordan Loland<br>Written 2026/04/## TODO</p>
            <h3>Introduction</h3>
        `
        // Add more articles here
    };

    contentArea.innerHTML = articles.home;

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