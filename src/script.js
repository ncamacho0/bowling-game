
bowlingGame = function() {
    let obj = {};
    let currentRoll = 0;
    let rolls = [];

    let isStrike = (id) => {
        if(rolls[id] === 10) 
            return true;
        else return false;
    };

    let isSpare = (id) =>  {
        if(rolls[id] + rolls[id + 1] === 10)
            return true;
        else return false;
    };

    obj.roll = (pins) => {
        rolls[currentRoll++] = pins;
    };

    obj.score = () => {
        let total = 0;
        let id = 0;
        for(let frame = 0; frame < 10; frame++) {
            if(isStrike(id)) {
                total += 10 + rolls[id + 1] + rolls[id + 2];
                id++;
            }
            else if(isSpare(id)) {
                total += 10 + rolls[id + 2];
                id += 2;
            } else {
                total += rolls[id] + rolls[id + 1];
                id += 2;
            }
        }

        return total;
    }

    return obj;
}

