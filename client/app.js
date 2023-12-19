async function getMessage() {
  const response = await fetch(
    "https://miny-stack-server-v6m1.onrender.com/message"
  );
  const json = await response.json();
  const p = document.getElementById("message");
  p.textContent = json.message;
}

getMessage();
