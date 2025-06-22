
import { getCurrentDateTime } from "../src/utils/getCurrentTime";
import { describe } from "vitest";


const mockcurrentDate = new Date();


describe('getCurrentDateTime', () => {
    test('Debe retornar la hora actual', () => {
        const result = getCurrentDateTime(-14400); // GMT-4
        expect(result).toEqual({
            hour: mockcurrentDate.getHours(),
            minute: mockcurrentDate.getMinutes(),
            date: mockcurrentDate.getDate(),
            month: mockcurrentDate.getMonth() + 1,
            longDate: mockcurrentDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        })
    })
})