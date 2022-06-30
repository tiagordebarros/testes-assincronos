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

  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    // console.log(response); // Retorna 'Invalid id' ao passar um parâmetro inválido
    expect(response).toBe('Invalid id');
    // expect(response).toBe('Falso positivo'); // Verifica se o teste não é um falso positivo. É esperado que falhe
  });

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4); // Observar que fetch foi chamado 4 vezes dentro do escopo do Describe do teste. Poderia utilizar  beforeEach ou o afterEach para não permitir que a função vazasse do escopo
    expect(fetch).toHaveBeenCalledWith(url);
  });

});