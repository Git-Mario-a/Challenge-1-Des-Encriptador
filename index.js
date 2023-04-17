function accion(action) {
      const input = document.getElementById("input").value;
    let output;

    if (action === "encriptar") {
        output = encriptar(input);
    } else if (action === "desencriptar") {
        output = desencriptar(input);
    }

    document.getElementById("output").value = output;
}

function encriptar(input) {
    const replaced = input.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return replaced;
  }
  function desencriptar(input) {
    const replaced = input.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return replaced;
  }

function copyToClipboard() {
  const output = document.getElementById("output");
  output.select();
  output.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado al portapapeles!");
}