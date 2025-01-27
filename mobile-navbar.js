class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navlinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addClickEventListener("click", () => console.log("Hey 🐯"));
    }


    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();