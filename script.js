async function generateYapping() {
  const input = document.getElementById("userInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    alert("Tolong isi nama dulu!");
    return;
  }

  if (input.length > 25) {
    alert("Maksimal 25 karakter untuk nama!");
    return;
  }

  resultDiv.innerHTML = "Loading... ⏳";

  try {
    const response = await fetch(`https://api.sxtream.xyz/maker/yapping?name=${encodeURIComponent(input)}`);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    resultDiv.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "❌ Gagal generate gambar!";
  }
}