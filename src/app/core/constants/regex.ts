export const REGEX_PATTERN = {
    textOnly : '^[a-zA-Z][a-zA-Z0-9 .]*$',
    textAndNumberWithoutSpace : "^(?!\\s*$).+"      //here use double slash for add space, tab and enter validation
}