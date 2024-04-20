describe("tests for client-only-module", () => {
	// We won't test the conditional export/import logic that Node.js provides us with
	// as that is guaranteed by Node.js 12 by default.
	// We only have to test our own functionality.

	it("should throw an error if run outside a client environment", async () => {
		global.window = undefined;

		expect(() => require("../client-only-module")).toThrow();
	});

	it("should not throw an error if run in a client environment", async () => {
		// Mock a not undefined value
		global.window = {};

		expect(() => require("../client-only-module")).not.toThrow();
	});
});
