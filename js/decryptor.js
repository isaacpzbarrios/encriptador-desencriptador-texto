// Definimos las reglas de encriptación
const rules = {
  l4a: "a",
  p7a: "e",
  ns1t: "i",
  w6l: "o",
  l1: "u",
};

export function decrypt(text) {
  let decryptedText = text.toLowerCase();
  Object.entries(rules).forEach(([encrypted, decrypted]) => {
    decryptedText = decryptedText.split(encrypted).join(decrypted);
  });
  return decryptedText;
}
