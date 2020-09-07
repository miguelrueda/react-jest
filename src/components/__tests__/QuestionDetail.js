import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe(`The Question Detail Component`, () => {

    describe(`The container element`, () => {
        describe(`mapStateToProps`, () => {
            it(`should map the state to props correctly`, () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };
                const appSate = {
                    questions: [
                        sampleQuestion
                    ]
                };
                const ownProps = {
                    question_id: 42,
                };
                const componentSate = mapStateToProps(appSate, ownProps);
                console.log(componentSate);

                expect(componentSate).toEqual(sampleQuestion);
            });
        });
    });

    describe(`The display element`, () => {
        it(`Should not regress`, () => {
            const tree = renderer.create(
                <QuestionDetailDisplay 
                    title="The meaning of life 2"
                    body="42"
                    answer_count={0}
                    tags={['hitchhiking']}
                />);
            expect(tree.toJSON).toMatchSnapshot();
        });
    });
});
