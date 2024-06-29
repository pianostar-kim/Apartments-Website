const activeClassToken = "active";
const inactiveClassToken = "inactive";
window.addEventListener("resize", closeMobileNavigatorUponResize);

function openMobileNavigator() {
    const mobileNavigator = document.getElementById("mobile-navigation");
    mobileNavigator.classList.remove(inactiveClassToken)
    mobileNavigator.classList.add(activeClassToken);
    const darkener = document.getElementById("darkener");
    darkener.classList.remove(inactiveClassToken);
    darkener.classList.add(activeClassToken);
}

function closeMobileNavigator() {
    const mobileNavigator = document.getElementById("mobile-navigation");
    mobileNavigator.classList.remove(activeClassToken);
    mobileNavigator.classList.add(inactiveClassToken);
    const darkener = document.getElementById("darkener");
    darkener.classList.remove(activeClassToken);
    darkener.classList.add(inactiveClassToken);
}

function closeMobileNavigatorUponResize() {
    if (window.innerWidth >= 728) {
        const mobileNavigator = document.getElementById("mobile-navigation");
        mobileNavigator.classList.remove(activeClassToken);
        mobileNavigator.classList.remove(inactiveClassToken);
        const darkener = document.getElementById("darkener");
        darkener.classList.remove(activeClassToken);
        darkener.classList.remove(inactiveClassToken);
    }
}