export async function translateText(text,translateFrom,translateTo) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    return data.responseData.translatedText;
}