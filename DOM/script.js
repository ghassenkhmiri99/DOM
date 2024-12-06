var char1 = document.getElementById('inputChar');
var divA = document.getElementById('divA');
var divB = document.getElementById('divB');
var divC = document.getElementById('divC');
var divD = document.getElementById('divD');

function addNewElement() {
    var charDiv = 'div'.concat(char1.value.toUpperCase());

    var nodeH1 = document.createElement('h1');
    var textNodeH1 = document.createTextNode(char1.value);
    nodeH1.appendChild(textNodeH1);

    var nodeDiv = document.createElement('div');
    nodeDiv.setAttribute('id', charDiv);

    nodeDiv.style.display = 'flex';
    nodeDiv.style.justifyContent = 'center';
    nodeDiv.style.alignItems = 'center';
    nodeDiv.style.width = '200px';
    nodeDiv.style.height = '200px';
    nodeDiv.style.border = '2px solid black';
    nodeDiv.style.margin = '5px';

    nodeDiv.appendChild(nodeH1);
    document.getElementsByClassName("sectionRight")[0].appendChild(nodeDiv);

    nodeDiv.style.backgroundColor = 'red';
}


function clean() {
    divA.style.backgroundColor = 'white';
    divB.style.backgroundColor = 'white';
    divC.style.backgroundColor = 'white';
    divD.style.backgroundColor = 'white';
}

function highlightChar() {
    clean();
    switch (char1.value) {
        case 'a': divA.style.backgroundColor = 'yellowGreen';
            break;
        case 'b': divB.style.backgroundColor = 'yellowGreen';
            break;
        case 'c': divC.style.backgroundColor = 'yellowGreen';
            break;
        case 'd': divD.style.backgroundColor = 'yellowGreen';
            break;
        default:
            addNewElement();
    }

}