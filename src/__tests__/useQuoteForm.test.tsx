// Test para verificar que el hook existe
describe('useQuoteForm Hook', () => {
  test('Debería de estar definido', () => {
    // Test para verificar que se puede importar
    const { useQuoteForm } = require('../hooks/useQuoteForm');
    expect(useQuoteForm).toBeDefined();
  });
});