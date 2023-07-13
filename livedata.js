function fetchData() {
    fetch('https://kpl2023.online/registration/kpl/registration/api/soldPlayerList')
      .then(response => response.json())
      .then(data => {
        // Process the received data and update the UI
        const apiDataElement = document.getElementById("api-data");
        apiDataElement.innerHTML = ""; // Clear previous data
  
        // Append each item as a list item
        data.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = "" + JSON.stringify(item).replace(/"/g, "") + ""; // Replace double quotes 
          apiDataElement.appendChild(listItem);
        });
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }
  


  // Fetch data initially
  fetchData();
  // fetchliveDataForTeam()

  // Refresh and fetch data every 1 minute=60000
  // setInterval(fetchData, 10000);
  // setInterval(fetchliveDataForTeam, 600000);
  



  