import { convertTime } from "../src/utils/convertTime";
import { describe } from "vitest";


describe('convertTime', () => {

    test('Debe retornar la hora en formato 12 horas', () => {
        const result = convertTime(22,16);
        expect(result).toEqual({
            meridiem: "PM",
            newHour: "10",
            newMinute: "16",
        })
    })
    test('Debe retornar la hora en formato 12 horas', () => {
        const result = convertTime(1,16);
        expect(result).toEqual({
            meridiem: "AM",
            newHour: "01",
            newMinute: "16",
        })
    })
    test('La hora debe retornar 12', () => {
        const result = convertTime(12,16);
        expect(result).toEqual({
            meridiem: "PM",
            newHour: "12",
            newMinute: "16",
        })
    })
})