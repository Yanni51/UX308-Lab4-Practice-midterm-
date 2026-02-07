import { yee_ha } from "../src/yee_ha.js"

describe("yee_ha", function(){

    it("returns Yee when divisible by 3", function(){
        expect(yee_ha(9)).toBe("Yee")
    })

    it("returns Ha when divisible by 7", function(){
        expect(yee_ha(14)).toBe("Ha")
    })

    it("returns Yee Ha when divisible by both 3 and 7", function(){
        expect(yee_ha(21)).toBe("Yee Ha")
    })

    it("returns Nada otherwise", function(){
        expect(yee_ha(10)).toBe("Nada")
    })

})