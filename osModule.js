// osModule.js
const os = require('os');

function getSystemInfo() {
  const totalMemoryMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
  const freeMemoryMB = (os.freemem() / (1024 * 1024)).toFixed(2);

  return {
    Nombre: os.platform(),
    Tipo: os.type(),
    Versión: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: `${totalMemoryMB} MB`,
    MemoriaLibre: `${freeMemoryMB} MB`
  };
}

export default getSystemInfo