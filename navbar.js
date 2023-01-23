class MyComponent extends HTMLElement {
    connectedCallback() {
        let baseURL = window.location.href
        let baseURLi = baseURL.lastIndexOf("src")
        baseURL = `${baseURL.substring(0, baseURLi)}src/`
        this.innerHTML = `
        <div class="navbar">
        
            <div class="logo flex-vertical-centre">
            <!--<img style="height: 3rem" src="https://ik.imagekit.io/pzcihm1mr/icon.png?tr=h-200">-->
            <img style="height: 3rem" src="lunar_sim_site_logo.png">
            Lunar Simulations
            </div>
            <div>
                <div class="navbar-links hide-mobile">
                    <a href="index.html">Home</a>
                    <a href="features.html">Features</a>
                    <a href="https://discord.gg/SCDwaUjvyT">Join our server</a>
                </div>
                <button class="hide-desktop" id="menu-btn">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>
        </div>
        `;
    }
}

customElements.define('navbar-component', MyComponent);
