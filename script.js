// JS for Select Menu
const wrapper = document.querySelector('.wrapper'),
selectBtn = wrapper.querySelector('.select-btn'),
searchInp = wrapper.querySelector('input'),
options = wrapper.querySelector('.options');

let countries = ['Afganishtan', 'Algeria', 'Argentina', 'Bangladesh', 'Belgium', 'Bhutan','Brazil', 'Canada', 'China', 'Denmark', 'Ethiopia', 'Finland', 'France', 'Germany', 'Hungary', 'Iceland', 'Iran', 'Italy', 'Japan', 'Malaysia', 'Maldives', 'Mexico', 'Nepal', 'Netherlands', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Russia', 'Romania', 'South Africa', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Uganda', 'Ukraine', 'United States', 'United Kingdom', 'Vietnam'];

function addCountry() {
    countries.forEach(country => {
        let li = `<li onclick="updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

addCountry();

function updateName(selectedLi) {
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle('active');
});
// JS for Select Menu