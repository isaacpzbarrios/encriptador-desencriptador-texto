import { encrypt } from "./encryptor.js";
import { decrypt } from "./decryptor.js";

// Función para manejar la encriptación
function handleEncrypt() {
  const input = document.getElementById("textarea_encryptor").value;
  if (input.length !== 0) {
    const output = encrypt(input);
    document.getElementById("txt_decryptor").textContent = output;
    showContentBox();
  } else {
    hiddenContentBox();
  }
}

// Función para manejar la desencriptación
function handleDecrypt() {
  const input = document.getElementById("textarea_encryptor").value;
  if (input.length !== 0) {
    const output = decrypt(input);
    document.getElementById("txt_decryptor").textContent = output;
    showContentBox();
  } else {
    hiddenContentBox();
  }
}

// Función para mostrar la encriptación
function showContentBox() {
  document.querySelector(".decryptor__container__box").style.display = "none";
  document.querySelector(".decryptor__container__msg").style.display = "flex";
}

// Función para mostrar mensaje por defecto de entrada
function hiddenContentBox() {
  document.querySelector(".decryptor__container__box").style.display = "flex";
  document.querySelector(".decryptor__container__msg").style.display = "none";
}

// Función para copiar en el portapapeles
const copyContent = async () => {
  const text = document.getElementById("txt_decryptor").textContent;
  console.log(text);
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
};

//precargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn_encrypt")
    .addEventListener("click", handleEncrypt);
  document
    .getElementById("btn_decrypt")
    .addEventListener("click", handleDecrypt);
  document.getElementById("btn_copy").addEventListener("click", copyContent);

  //Listener para cuando ingresan una mayuscula o un caracter especial
  document.getElementById("textarea_encryptor").addEventListener("input", function () {
    const textarea = document.getElementById("textarea_encryptor");
    const error_message = document.getElementById("error_encryptor");
    const value = textarea.value;

    // Expresión regular para validar que solo haya letras minúsculas y sin acentos
    const regex = /^[a-z\s]*$/;

    if (regex.test(value)) {
      //Cambia el color del mensaje de exclamación al por defectp
      error_message.style.color = "#868E96";
    } else {
      //Cambia el color del mensaje de exclamación
      error_message.style.color = "red";
      // Elimina los caracteres no deseados para no mostrarlos
      textarea.value = value.replace(/[^a-z\s]/g, "");
    }
  });
});
