const fetch = require('node-fetch');
const axios = require('axios');
const ip = require('ip');




module.exports.mostrar = (req, res) => {
  const ip = require('ip');
  const clientIp = ip.address(); 
  res.render('index', { "clientIp": clientIp });
};

// Función para enviar los datos al servidor de la API
exports.enviar = async (req, res) => {
  try {
    // Obtén los valores de los campos del formulario
    const frase = req.body.frase;
    const reaccion = req.body.btnReaccion;
    const colorfondo = req.body.colorFondo;
    const colorLetra = req.body.colorLetra;
    const ip = req.body.ip; // Asegúrate de que este campo se llame 'ip' en el formulario

    // Define los datos que deseas enviar a la API
    const datos = {
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip
    };

    // Realiza una solicitud POST a la API con los datos
    const response = await axios.post('https://apicitaparaemergentes.onrender.com/crear', datos);

    // Maneja la respuesta de la API como desees
    

    // Responde a la solicitud en tu controlador de aplicación
    res.status(200).json({ mensaje: 'Solicitud POST enviada con éxito' });
  } catch (error) {
    console.error('Error al enviar la solicitud POST a la API:', error);
    res.status(500).json({ error: 'Error en la solicitud POST a la API' });
  }
};
