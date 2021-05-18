document.addEventListener("DOMContentLoaded", async () => {
  const handleClick = document.getElementById("handleClick");
  console.log(handleClick);
  try {
    handleClick.onclick = () => {
        const value = document.getElementById("value").value
        console.log(value);
    }
  } catch (err) {
    console.error(err);
  }
});
