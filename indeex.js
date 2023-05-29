fetch('http://worldtimeapi.org/api/ip/timezone/187.161.182.5')
  .then(response => response.json())
  .then(data => {
    // Procesar los datos JSON
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
