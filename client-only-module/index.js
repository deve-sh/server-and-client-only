if (typeof window === "undefined") {
	throw new Error(
		"This module can only be used in a client environment." +
			"It has been imported in a server environment."
	);
}
