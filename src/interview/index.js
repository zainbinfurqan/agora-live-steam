import React from 'react';

function index(props) {

    // function getChange(coins, ammount) {
    //     console.log(coins, ammount)

    //     let remainsCoins = coins.filter(item => item <= ammount);

    //     let totalCoins = {}

    //     let remainingAmount = ammount;

    //     for (let a = remainsCoins.length - 1; a >= 0; a--) {

    //         if (remainsCoins[a] <= remainingAmount) {

    //             let counter = Math.floor(remainingAmount / remainsCoins[a]);

    //             remainingAmount = remainingAmount % remainsCoins[a];
    //             console.log("remainingAmount", remainingAmount)
    //             totalCoins[remainsCoins[a]] = counter
    //         }
    //     }
    //     return totalCoins

    // }

    const _ammount = 18;
    const _coins = [1, 3, 6, 20];


    const test = (a, b, c, d) => {
        var name = 'zain';
        a += 10
        b = 15
        c.name = "Tom"
        d = { name: 'Bill' }
        {
            var abc_ = "ok";
            let __abc = "ko";
        }
        console.log(abc_)
        console.log(__abc)

    }

    let aa = 1;
    let bb = 2;
    let cc = { name: 'James' }
    let dd = { name: 'Nick' }
    test(aa, bb, cc, dd)
    console.log(name)
    //  console.log(aa,bb,cc.name,dd.name)



    //11,15,Tom,Bill
    //11,15,James,Nick
    //error value can't be chnage ,error value can't be chnage,James,Nick 
    console.log(getChange(_coins, _ammount))

    return (
        <div>

        </div>
    );
}

export default index;