import { airquality } from "../src/airquality.js"

describe("airquality", function(){

    it("returns Good", function(){
        expect(airquality(25)).toBe("Good")
    })

    it("returns Moderate", function(){
        expect(airquality(75)).toBe("Moderate")
    })

    it("returns Unhealthy for Sensitive Groups", function(){
        expect(airquality(125)).toBe("Unhealthy for Sensitive Groups")
    })

    it("returns Unhealthy", function(){
        expect(airquality(175)).toBe("Unhealthy")
    })

    it("returns Very Unhealthy", function(){
        expect(airquality(250)).toBe("Very Unhealthy")
    })

    it("returns Hazardous", function(){
        expect(airquality(350)).toBe("Hazardous")
    })

})