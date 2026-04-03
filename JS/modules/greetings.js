{
  /* Greetings module 
    Create a file greetings.js with:

A named export: function greet(name) — returns "Hello, {name}!"
A named export: const DEFAULT_LANG = "English"
A default export: function formalGreet(name) — returns "Good day, {name}."
*/
}

export function greet(name) {
    return `Hello, ${name}!`;
}

export const DEFAULT_LANG = "English";

export default function formalGreet(name) {
    return `Good day, ${name}.`;
}