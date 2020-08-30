// The es6 standard allows us to export javascript code to include it in other scripts

let datas = ['d1', 'd2', 'd2'];

function showAlert(message) {
    alert(message);
}

const uselessCond = ('tete a toto' == 0) ? true : false;

// the braces allow us to export several variables / functions
export { datas, showAlert, uselessCond};


// The default export will then allow us to import the show alert function without having to use the braces
export default showAlert;
