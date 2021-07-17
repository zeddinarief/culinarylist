import '../component/search-bar.js';
import '../component/culinary-list.js';
import axios from 'axios';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const culinaryListElement = document.querySelector("culinary-list");

    const onSearchTyped = async () => {
        try{
            const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement.value}`);
            const resultJson = result.data;
            if (resultJson.meals) {
                renderResult(resultJson.meals);
            } else {
                fallbackResult(`Tidak ditemukan`);
            }
        } catch (message) {
            console.log(message);
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        culinaryListElement.innerHTML = "";
        culinaryListElement.culinaries = results;
    };

    const fallbackResult = (message) => {
        culinaryListElement.renderError(message);
    };

    searchElement.searchEvent = onSearchTyped;

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("nav-bar").style.top = "0";
            document.querySelector("search-bar > #search-container").style.top = "100px";
        } else {
            document.querySelector("nav-bar").style.top = "-70px";
            document.querySelector("search-bar > #search-container").style.top = "16px";
        }
        prevScrollpos = currentScrollPos;
    }
};

export default main;