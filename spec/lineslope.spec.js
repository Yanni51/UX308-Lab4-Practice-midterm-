import { lineslope } from "../src/lineslope.js"

describe("slope", function(){

    it("calculates slope of positive line", function(){
        expect(lineslopeslope(0, 0, 10, 10)).toBe(1)
    })

    it("calculates slope of horizontal shift", function(){
        expect(lineslope(2, 4, 6, 8)).toBe(1)
    })

    it("calculates slope of negative line", function(){
        expect(lineslope(1, 5, 4, 1)).toBe(-4/3)
    })

})