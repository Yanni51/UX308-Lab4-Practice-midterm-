import { lawnminutes } from "../src/lawnminutes.js"

describe("lawnminutes", function(){

    it("calculates mowing time for small lawn", function(){
        expect(lawnminutes(10, 10, 5)).toBe(20)
    })

    it("calculates mowing time for medium lawn", function(){
        expect(lawnminutes(20, 30, 10)).toBe(60)
    })

    it("calculates mowing time for large lawn", function(){
        expect(lawnminutes(50, 40, 20)).toBe(100)
    })

})