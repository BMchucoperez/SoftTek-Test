// Test para verificar que el componente existe
describe('Header Component', () => {
  test('Debería de estar definido', () => {
    // Test para verificar que el módulo se puede importar
    const Header = require('../components/Header/Header').default;
    expect(Header).toBeDefined();
  });
});