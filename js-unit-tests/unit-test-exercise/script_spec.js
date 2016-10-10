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
        it('testing number with units', function() {
        expect(getRawNumberFromCSSUnit('300px')).toBe(300);
                expect(getRawNumberFromCSSUnit('1em')).toBe(1);
        //      expect(getRawNumberFromCSSUnit('50%')).toBe(0.5);
        });
        
        it('testing number without units', function() {
        expect(getRawNumberFromCSSUnit('0.5')).toBe(0.5);
                expect(getRawNumberFromCSSUnit('.5')).toBe(0.5);
        });
//  

        var arr = [34, [3, 6, 7]];
        arr.forEach(function(item) {
        it('testing not strings', function() {
            function x() {getRawNumberFromCSSUnit(item)}

            expect(x).toThrow(new Error('argument must be typeof string'));
            });
        });
});

        describe('FizzBuzzNumber returns', function () {
        /**
         * List of missing test cases:
         * - test far all possible return options (remember about integers and floating point numbers as arguments)
         * - test for non number arguments
         */
        });
        describe('Password validator returns', function () {
        /**
         * List of missing test cases:
         * - remember about wrong argument type
         * - valid password need to have >= 5 characters
         * - valid password needs at least 1 uppercase char, 1 lowercase char and 1 integer char
         * - password cannot have spaces inside
         * - password can have special characters
         * - remember about test cases for invalid passwords
         */
        });
        describe('sorter correctly sorts number by', function () {
        /**
         * List of missing test cases:
         * - remember about wrong argument type
         * - use spies for dependent methods
         * - remember about all conditional options
         */
        });

