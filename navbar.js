class MyComponent extends HTMLElement {
    connectedCallback() {
        let baseURL = window.location.href
        let baseURLi = baseURL.lastIndexOf("src")
        baseURL = `${baseURL.substring(0, baseURLi)}src/`
        this.innerHTML = `
        <div class="navbar">
            <div class="logo">Lunar Simulations</div>
            <div>
                <div class="navbar-links hide-mobile">
                    <a href="index.html">Home</a>
                    <a href="features.html">Features</a>
                    <!--<a href="https://discord.gg/SCDwaUjvyT">Join our server</a>-->
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
            // <a id="menu-btn" style="
            // align-items: center;
            // flex-direction: column;" class="hide-desktop">
            //     <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24"
            //         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            //         stroke-linejoin="round">
            //         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            //         <line x1="4" y1="6" x2="20" y2="6"></line>
            //         <line x1="4" y1="12" x2="20" y2="12"></line>
            //         <line x1="4" y1="18" x2="20" y2="18"></line>
            //     </svg>
            // </a>
