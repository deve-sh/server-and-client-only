if (typeof window === "undefined") {
	// In case this file does creep into any imports from a server module, throw an error and block dev/builds.
	throw new Error(
		"This module can only be used in a client environment. " +
			"It has been imported in a server environment."
	);
}
