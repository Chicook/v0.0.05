# Smart Contracts Repository - v0.0.05

## 🆕 Novedades de esta Versión

### Nuevos Contratos Añadidos
- **WCV Token**: Token principal del ecosistema ubicado en `wcv/`
- **LandNFT Contract**: Sistema de NFTs para terrenos (`LandNFT.sol`)
- **Entorno de Pruebas**: Ambiente completo de testing en `entorno_deprueba/`

### Funcionalidades Implementadas
- ✅ Sistema de tokens WCV completamente funcional
- ✅ Contratos NFT para gestión de terrenos
- ✅ Ambiente de desarrollo y testing configurado
- ✅ Scripts de compilación y despliegue automatizados

## 📁 Estructura del Repositorio

```
├── wcv/                    # Token principal WCV
├── entorno_deprueba/       # Ambiente de pruebas
├── LandNFT.sol            # Contrato NFT de terrenos
├── migrations/            # Scripts de migración
├── test/                  # Tests unitarios
└── truffle-config.js      # Configuración de Truffle
```

## 🚀 Inicio Rápido

### Instalación
```bash
npm install -g truffle
npm install
```

### Compilación
```bash
truffle compile
```

### Despliegue
```bash
truffle migrate
```

### Testing
```bash
truffle test
```

## 📋 Roadmap

### Próximas Mejoras
- [ ] Auditoría completa de contratos
- [ ] Optimización de gas fees
- [ ] Ampliación de suite de tests
- [ ] Documentación técnica detallada
- [ ] Integración con frontend
- [ ] Deploy en testnet

## 🔧 Tecnologías Utilizadas
- Solidity ^0.8.0
- Truffle Framework
- OpenZeppelin Contracts
- Node.js & npm

## 📞 Soporte
Para reportar bugs o solicitar nuevas funcionalidades, por favor crear un issue en el repositorio.