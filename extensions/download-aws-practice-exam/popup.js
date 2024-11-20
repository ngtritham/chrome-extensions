document.addEventListener("DOMContentLoaded", () => {
  console.log('On DOM ready');
  chrome.runtime.sendMessage({ action: "getData" }, (response) => {
      console.log('Load data out: ');
      console.log(response.data);
      window.data = response.data;
      const dataElement = document.getElementById("data");
      dataElement.textContent = JSON.stringify(response.data, null, 2);
  });
});