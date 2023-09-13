import * as countryModule from "./modules/countries.js";
import { translateText } from "./modules/apiCall.js";

const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchangeIcon = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const translateBtn = document.querySelector("button");

console.log(countryModule.countries);

selectTag.forEach((tag, id) => {
    for(let country_code in countryModule.countries){
        let selected = id == 0 ? country_code == 
        "en-GB" ? "selected" : "" : country_code == 
        "de-DE" ? "selected" : "";
        let option = `<option ${selected} value = "${country_code}">${countryModule.countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option)
    }
});

exchangeIcon.addEventListener("click", () => {
    let tempText = fromText.value;
    let tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if (!fromText.value){
        toText.value = "";
    }
});

translateBtn.addEventListener("click", async () => {
    let text = fromText.value.trim();
    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;

    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");

    const translatedText = await translateText(text,translateFrom,translateTo);
    toText.value = translatedText;
    toText.setAttribute("placeholder", "Translation");
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});