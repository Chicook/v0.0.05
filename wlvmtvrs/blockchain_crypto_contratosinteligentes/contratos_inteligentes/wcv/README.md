ESPACIO DE TRABAJO POR DEFECTO DE REMIX

El espacio de trabajo por defecto de Remix está presente cuando:
i. Remix se carga por primera vez.
ii. Se crea un nuevo espacio de trabajo con la plantilla 'Default'.
iii. No existen archivos en el Explorador de Archivos.

Este espacio de trabajo contiene 3 directorios:

1. 'contracts': Contiene tres contratos con niveles crecientes de complejidad.
2. 'scripts': Contiene cuatro archivos TypeScript para desplegar un contrato. Se explica más abajo.
3. 'tests': Contiene un archivo de prueba en Solidity para el contrato 'Ballot' y un archivo de prueba en JS para el contrato 'Storage'.

SCRIPTS

La carpeta 'scripts' tiene cuatro archivos TypeScript que ayudan a desplegar el contrato 'Storage' utilizando las bibliotecas 'web3.js' y 'ethers.js'.

Para desplegar cualquier otro contrato, simplemente actualiza el nombre del contrato de 'Storage' al contrato deseado y proporciona los argumentos del constructor 
en el archivo `deploy_with_ethers.ts` o `deploy_with_web3.ts`.

En la carpeta 'tests' hay un script que contiene pruebas unitarias Mocha-Chai para el contrato 'Storage'.

Para ejecutar un script, haz clic derecho sobre el nombre del archivo en el explorador de archivos y selecciona 'Run'. Recuerda que el archivo Solidity debe estar compilado previamente.
El resultado del script aparecerá en la terminal de Remix.

Por favor, ten en cuenta que require/import es compatible de manera limitada para los módulos soportados por Remix.
Por ahora, los módulos soportados por Remix son ethers, web3, swarmgw, chai, multihashes, remix y hardhat solo para el objeto/plugin hardhat.ethers.
Para módulos no soportados, se mostrará un error como este: '<module_name> module require is not supported by Remix IDE'.

DESCRIPCIÓN DE WCV

WCV es un token desarrollado en la Binance Smart Chain Mainnet. 
Los tokens en esta red son activos digitales que utilizan la tecnología blockchain para representar valor, 
propiedad o acceso a servicios. Binance Smart Chain es conocida por su alta velocidad de transacciones y bajas tarifas, 
lo que la hace ideal para la creación y gestión de tokens como WCV.

El token WCV está diseñado para ser utilizado en diversas aplicaciones dentro del ecosistema blockchain. Algunas de sus posibles aplicaciones incluyen:
- **Pagos**: WCV puede ser utilizado como medio de intercambio para realizar transacciones rápidas y económicas.
- **Recompensas**: Puede ser empleado en programas de incentivos o recompensas dentro de plataformas descentralizadas.
- **Contratos inteligentes**: WCV puede integrarse en contratos inteligentes para automatizar procesos y garantizar la ejecución de acuerdos en proyectos descentralizados.

Además, el contrato inteligente asociado al token WCV está registrado en la dirección:  
**0x053532E91FFD6b8a21C925Da101C909A01106BBE**

Este contrato define las reglas y funcionalidades del token, como su emisión, transferencia y cualquier lógica adicional que se haya implementado. Gracias a la tecnología blockchain, todas las transacciones realizadas con WCV son transparentes, seguras y verificables.
