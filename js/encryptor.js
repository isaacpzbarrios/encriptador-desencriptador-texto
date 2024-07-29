// Definimos las reglas de encriptación
const rules = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export function encrypt(text) {
  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      return rules[char] || char;
    })
    .join("");
}
