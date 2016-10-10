describe('fake suite', function () {
    it('fake test', function () {
        expect(true).toBe(true);
    });
});

describe('Gets raw number from CSS measurement Unit', function () {
    /**
     * List of missing test cases:
     * - test px, em, % values
     * - test integer and floating pint numbers (remember about 0.5 and .5 options)
     * - test non number strings
     * - test non string arguments
     */
    it('css returns number value', function () {
        expect(getRawNumberFromCSSUnit('100px')).toBe(100);
        expect(getRawNumberFromCSSUnit('100em')).toBe(100);
        expect(getRawNumberFromCSSUnit('100%')).toBe(100);
    });
});

describe('FizzBuzzNumber returns', function () {
    /**
     * List of missing test cases:
     * - test far all possible return options (remember about integers and floating point numbers as arguments)
     * - test for non number arguments
     *    */
    it('fizzbuzz', function () {
        expect(fizBuzzNumber(15)).toBe('fizzbuzz');
        expect(fizBuzzNumber(14)).not.toBe('fizzbuzz');
    });
    it('fizzBuzzNotText', function () {
        function fizz() {
            fizBuzzNumber('dupa');
        }
        expect(fizz).toThrow(new Error('argument must be typeof number'));
    });
});


describe('passwordValidator returns', function () {
    /**
     * List of missing test cases:
     * - remember about wrong argument type
     * - valid password need to have >= 5 characters
     * - valid password needs at least 1 uppercase char, 1 lowercase char and 1 integer char
     * - password cannot have spaces inside
     * - password can have special characters
     * - remember about test cases for invalid passwords
     */
    it('Prawidłowe hasło przechodzi', function () {
        expect(passwordValidator('E3ssss')).toBe(true);
    });
    it('za krótkie hasło nie przechodzi', function () {
        expect(passwordValidator('ss')).toBe(false);
    });
    it('brak liter nie przechodzi', function () {
        expect(passwordValidator('Esssss')).toBe(false);
    });
});

describe('sorter correctly sorts number by', function () {
    /**
     * List of missing test cases:
     * - remember about wrong argument type
     * - use spies for dependent methods
     * - remember about all conditional options
     */
});

