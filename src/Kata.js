function smash(words) {

    let value = "";

    words.forEach((word) => {
        value = value + word + ' '
    })

    return value.substring(0, value.length - 1);
}

smash = function (words) {
    return words.join(" ");
};

console.log(smash(['E', 'T']))