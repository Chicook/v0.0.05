# Wallet Integration Documentation

## Estructura
- `metamask/`: Integración con MetaMask
- `WalletConnectButton.jsx`: Componente de conexión

### Pasos de Integración
1. Configurar Web3:
```bash
npm install web3 @web3-react/core
```

2. Implementar conexión:
```javascript
// Ejemplo básico de conexión
await window.ethereum.request({ method: 'eth_requestAccounts' });
```

### Mejoras Pendientes
- [ ] Añadir soporte multi-wallet
- [ ] Mejorar manejo de errores
- [ ] Implementar reconexión automática
- [ ] Añadir eventos de wallet