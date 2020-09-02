describe(`The question list`, () => {

    beforeEach(() => {
        console.log("Before each!");
    });

    beforeAll(() => {
        console.log("Before all!");
    });

    it(`should display a list of items`, () => {
        expect(2+2).toEqual(4);
    });

    it("Test", () => {
        console.log("This should be skipped");
    })

    afterEach(() => {
        console.log("After each");
    });

    afterAll(() => {
        console.log("After all");
    });

});