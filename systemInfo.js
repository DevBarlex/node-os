// systemInfo.js
import getSystemInfo from './osModule';
import getNetworkInfo from './networkModule';

console.log('--- Información del Sistema Operativo ---');
const systemInfo = getSystemInfo();
for (const [key, value] of Object.entries(systemInfo)) {
  console.log(`${key}: ${value}`);
}

console.log('\n--- Información de las Interfaces de Red ---');
const networkInfo = getNetworkInfo();
for (const [interfaceName, addresses] of Object.entries(networkInfo)) {
  console.log(`Interfaz ${interfaceName}:`);
  addresses.forEach(addr => {
    console.log(`  Familia: ${addr.Familia}`);
    console.log(`  Dirección: ${addr.Dirección}`);
    console.log(`  Interno: ${addr.Interno}`);
  });
}

