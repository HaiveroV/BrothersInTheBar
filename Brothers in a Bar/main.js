    let counter = 0;

    let glasses = [1, 1, 2, 3, 3, 3, 2, 2, 1, 1];
    let leftGlasses = [];

    function FindingCombinationsCount(glasses) {

        for (let i = 0; i < glasses.length; i++) {
            if (glasses[i] == glasses[i + 1] && glasses[i + 1] == glasses[i + 2]) {

                
                glasses.splice(glasses[i], 1);
                glasses.splice(glasses[i + 1], 1);
                glasses.splice(glasses[i], 1);

                leftGlasses.push(glasses[i]);

                counter++;

                if (glasses.length != 1) FindingCombinationsCount(glasses);
                break;
            } else if (i == glasses.length - 3) {
                break;
            }
        }
    }

    function PrintResultAndResetCounter() {
        if (counter == 0) {
            console.log('There are no possible results from this array!');
            
        } else {
            console.log(`The possible results are ${counter}`);
        }
        counter = 0;
    }

    FindingCombinationsCount(glasses);
    PrintResultAndResetCounter();