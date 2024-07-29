// Definimos las reglas de encriptación
const rules = {
  a: "l4a",
  e: "p7a",
  i: "ns1t",
  o: "w6l",
  u: "l1",
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
