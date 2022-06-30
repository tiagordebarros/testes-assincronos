require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    // console.log(character); // Retorna o objeto
    // console.log(character.name); // Retorna a porpriedade 'name' do objeto
    expect(character.name).toBe('Wonder Woman');
    // expect(character.name).toBe('Spider Man'); // Verifica se o teste não é um falso positivo. É esperado que falhe
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    // console.log(failRequest); // Retorna o erro da requisição
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

});