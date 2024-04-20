describe("tests for server-only-module", () => {
	// We won't test the conditional export/import logic that Node.js provides us with
	// as that is guaranteed by Node.js 12 by default.
	// We only have to test our own functionality.

	it("should throw an error if run outside a server environment", async () => {
		expect(() => require("../server-only-module")).toThrow();
	});

	it("should not throw an error if run in a server environment", async () => {
		expect(() => require("../server-only-module/pass")).not.toThrow();
	});
});
