// Use 'const' for variables that should not be reassigne

// Examples:
const API_URL = 'https://api.example.com'; // Primitive value (immutable)
const MAX_RETRIES = 3;                     // Primitive value

const user = { name: 'John' };             // Object (reference is constant)
user.name = 'Jane';                        // ✅ Allowed - property mutation
// user = { name: 'Jane' };                // ❌ Error - reassignment

const colors = ['red', 'blue'];            // Array (reference is constant)
colors.push('green');                      // ✅ Allowed - array modification
// colors = ['purple'];                    // ❌ Error - reassignment

// Use for function parameters to signal intent (though not enforced)
function processUser(const user) {         // Note: 'const' in parameters isn't standard JS
  // Implementation                       // Use JSDoc instead for documentation
}

// Best practice: Default to 'const', use 'let' only when reassignment is needed