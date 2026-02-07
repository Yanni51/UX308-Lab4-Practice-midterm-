import { squarefeettoacre } from "../src/squarefeettoacre.js"

describe("squarefeettoacre", function(){

    it("converts 43560 sqft to 1 acre", function(){
        expect(squarefeettoacre(43560)).toBe(1)
    })

    it("converts 87120 sqft to 2 acres", function(){
        expect(squarefeettoacre(87120)).toBe(2)
    })

    it("converts half an acre", function(){
        expect(squarefeettoacre(21780)).toBe(0.5)
    })

})