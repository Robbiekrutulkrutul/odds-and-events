cost bank = [];
cost odds = [];
cost evens =[];

function addToBank (number) {
    bank.push(number);
    render();
}

function sort() {
    const number = bank.shift();
    if (number % 2 ===0) {
        evens.push(number);
    } else {

    }
}

/
function sortOne() {
    sort();
    render();
}
/
function sortAll() {
    while (bank.length) {
        sort
    }
    render();
}

function NumberForm() {
    const $form = document.createElement("form");
    $form.innerHTML =
    <><label>
            Add a number to the bank
            <input name="number" type="number" />
        </label><button type /></>"submit" data-action="add"> Add number</button>
    <><button type="submit" data-action="sortOne"> Sort 1</button><button type="submit" data-action="sortAll</button>&#xD;&#xA;;&#xD;&#xA;}&#xD;&#xA;&#xD;&#xA;&#xD;&#xA;&#xD;&#xA;&#xD;&#xA;]" /></>