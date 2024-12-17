// networkModule.js
const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const result = {};

  for (const [interfaceName, addresses] of Object.entries(networkInterfaces)) {
    result[interfaceName] = addresses.map(addr => ({
      Familia: addr.family,
      Dirección: addr.address,
      Interno: addr.internal
    }));
  }

  return result;
}

export default getNetworkInfo