import {AdRecord} from "../records/ad.record";

const defaultObj = {
    name: 'Test name',
    description: 'blah',
    lat: 9,
    lon: 9,
    url: 'http://localhost',
    price: 0
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj)

    expect(ad.name).toBe("Test name");
    expect(ad.description).toBe("blah");
});

test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('The price cannot be less than 0 or more than 9,999,999.')
});