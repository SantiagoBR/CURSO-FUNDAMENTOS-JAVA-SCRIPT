/*
13 /_4___

13 - 4 = 9  1
9  - 4 = 5  1
5  - 4 = 1  1
1  - 4 = -3
*/

function intDivision(dividend, divisor) {
    if (dividend < divisor) {
        return 0
    }

    return 1 + intDivision(dividend - divisor, divisor)
}