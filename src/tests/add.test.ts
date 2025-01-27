// Function to test
export const add = (a: number, b: number): number => a - b;

// Jest test case
test('adds two numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
});