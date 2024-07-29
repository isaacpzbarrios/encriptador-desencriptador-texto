// Definimos las reglas de encriptación
const rules = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

export function decrypt(text) {
  let decryptedText = text.toLowerCase();
  Object.entries(rules).forEach(([encrypted, decrypted]) => {
    decryptedText = decryptedText.split(encrypted).join(decrypted);
  });
  return decryptedText;
}
