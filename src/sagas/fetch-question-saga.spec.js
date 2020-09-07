import { handleFetchQuestion } from "./fetch-question-saga";
import _fetch from "isomorphic-fetch";

describe("Fetch questions saga", () => {
    beforeAll(() => {
        _fetch.__setValue([{question_id: 42}]);
    });
    it("shouold fetch the questions", async () => {
        const gen = handleFetchQuestion({ question_id: 42 });
        const { value } = await gen.next();

        expect(value).toEqual([{question_id: 42}]);
        expect(_fetch).toHaveBeenCalledWith(`/api/questions/42`);
    });
});