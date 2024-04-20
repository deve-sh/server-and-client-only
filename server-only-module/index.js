// This will be imported for non-node environments
throw new Error(
	"This module cannot be imported from a client module. " +
		"It should only be used inside a server environment."
);
