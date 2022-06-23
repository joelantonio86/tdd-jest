test('Devo conhecer as principais assetivas do jest', () =>{
let number= null;
expect(number).toBeNull();
number = 10;
expect(number).not.toBeNull(); // Está negando que o número é nulo
expect(number).toBe(10); // Se o número é igual a 10
expect(number).toEqual(10); // Se o número é igual a 10
expect(number).toBeGreaterThan(9); // Se o número que é maior que 9
expect(number).toBeLessThan(11);// Se o número que é menor que 11
});

test ('Devo saber trabalhar com objetos', () =>{
    const obj = {
        name: 'John',
        mail: 'john@mail.com'
    }
    expect(obj).toHaveProperty('name'); // Se existe a propriedade name
    expect(obj).toHaveProperty('name', 'John') // Se existe a propriedade name e o valor dela é John
    expect(obj.name).toBe('John'); // Ir direto na propriedade name para saber se o valor dela é John
    const obj2 = {
        name: 'John',
        mail: 'john@mail.com'
    }
    expect(obj).toEqual(obj2) //Comparar se as propriedades e os valores dos dois objetos são iguais
    expect(obj).toBe(obj) //Comparar se o obj é igual ao obj
});