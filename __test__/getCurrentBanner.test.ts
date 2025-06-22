import { getCurrentBanner } from "../src/utils/getCurrentBanner";
import { describe } from "vitest";





describe('getCurrentBanner', () => {

    test('Debe retornar el amanecer', () => {
        const result = getCurrentBanner(7);
        expect(result).toEqual({
            banner: '/images/sunrise.webp',
            greeting: 'Buenos días',
        })
    })
    test('Debe retornar la mañana', () => {
        const result = getCurrentBanner(10);
        expect(result).toEqual({
            banner: '/images/sky.webp',
            greeting: 'Buenos días',
        })
    })

    test('Debe retornar la tarde', () => {
        const result = getCurrentBanner(15);
        expect(result).toEqual({
            banner: '/images/sky.webp',
            greeting: 'Buenas tardes',
        })
    })

    test('Debe retornar la noche', () => {
        const result = getCurrentBanner(20);
        expect(result).toEqual({
            banner: '/images/night.webp',
            greeting: 'Buenas noches',
        })
    })


})