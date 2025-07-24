// Test de funciones utilitarias
describe('Funciones Utilitarias', () => {
  test('Debe validar el formato del DNI', () => {
    const validateDNI = (dni: string) => {
      return dni.length === 8 && /^\d+$/.test(dni);
    };

    expect(validateDNI('12345678')).toBe(true);
    expect(validateDNI('1234567')).toBe(false);
    expect(validateDNI('123456789')).toBe(false);
    expect(validateDNI('1234567a')).toBe(false);
  });

  test('Debe validar el formato del teléfono', () => {
    const validatePhone = (phone: string) => {
      return phone.length === 9 && /^\d+$/.test(phone);
    };

    expect(validatePhone('987654321')).toBe(true);
    expect(validatePhone('98765432')).toBe(false);
    expect(validatePhone('9876543210')).toBe(false);
    expect(validatePhone('98765432a')).toBe(false);
  });
});