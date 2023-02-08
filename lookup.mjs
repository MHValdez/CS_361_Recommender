import playTable from './playTable.mjs';

// Lookup play and generate response
function lookup(total, upcard) {
    // Convert card values to indicies
    const indexTotal    =   20 - total;
    const indexUpcard   =   upcard - 2;

    let result = playTable[indexTotal][indexUpcard];
    let response = "";

    // Convert double-down to hit
    if (result == "D") {
        result = "H";
    }

    // Generate response
    if (result == "S") {
        response = "The odds are in you favor to stand."
    }
    else if (result == "H") {
        response = "The odds are in your favor to hit."
    }

    return response;
}

export default lookup
