import NotifsViewer from "./NotifsViewer";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";

jest.mock("../services/NotificationsService");

const notificationsService = require("../services/NotificationsService").default;
notificationsService.default = jest.fn();

describe("The notification viewer", () => {

    beforeAll(() => {
        notificationsService.default.mockClear();
        notificationsService.__setCount(5);
    });

    it("Should display the correct number of notifications", async () => {
        const tree = renderer.create(
            <NotifsViewer />
        );

        await delay();
        const instance = tree.root;
        const component = instance.findByProps({
            className: `notifications`
        });
        const text = component.children[0];
        expect(text).toEqual("5 Notifications Awaiting");
    });
});