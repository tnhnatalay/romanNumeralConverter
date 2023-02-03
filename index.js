function convertToRoman(num) {
    let str = ""
    str += num
    let result = []
    let bas1ler = ""
    let bas2ler = ""
    let bas3ler = ""
    let bas4ler = ""
    if (str.length == 0) {
        result = []
    }
    else if (str.length > 0) {
        switch( str[str.length-1]) {
            case "1":
                bas1ler = "I";
                break;
            case "2":
                bas1ler = "II";
                break;
            case "3":
                bas1ler = "III";
                break;
            case "4":
                bas1ler = "IV";
                break;
            case "5":
                bas1ler = "V";
                break;
            case "6":
                bas1ler = "VI";
                break;
            case "7":
                bas1ler = "VII";
                break;
            case "8":
                bas1ler = "VIII";
                break;
            case "9":
                bas1ler = "IX";
                break;
        }
        switch (str[str.length-2]) {
            case "1":
                bas2ler = "X";
                break;
            case "2":
                bas2ler = "XX";
                break;
            case "3":
                bas2ler = "XXX";
                break;
            case "4":
                bas2ler = "XL";
                break;
            case "5":
                bas2ler = "L";
                break;
            case "6":
                bas2ler = "LX";
                break;
            case "7":
                bas2ler = "LXX";
                break;
            case "8":
                bas2ler = "LXXX";
                break;
            case "9":
                bas2ler = "XC";
                break;
        }
        switch (str[str.length-3]) {
            case "1":
                bas3ler = "C";
                break;
            case "2":
                bas3ler = "CC";
                break;
            case "3":
                bas3ler = "CCC";
                break;
            case "4":
                bas3ler = "CD";
                break;
            case "5":
                bas3ler = "D";
                break;
            case "6":
                bas3ler = "DC";
                break;
            case "7":
                bas3ler = "DCC";
                break;
            case "8":
                bas3ler = "DCCC";
                break;
            case "9":
                bas3ler = "CM";
                break;
        }
        switch (str[str.length-4]) {
            case "1":
                bas4ler = "M";
                break;
            case "2":
                bas4ler = "MM";
                break;
            case "3":
                bas4ler = "MMM";
                break;
        }
        result.push(bas4ler, bas3ler, bas2ler, bas1ler);
    }
    console.log(result.join(""))
    return result.join("")
}
convertToRoman(2001)