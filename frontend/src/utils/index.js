export const shortenText = (text, n) => {
    if (text.lengh > n) {
        const shortenText = text.substring(0, n).concat("...");
        return shortenText;

    }
    return text;
};

// validate email
export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
