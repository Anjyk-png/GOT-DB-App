export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  async gotResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    return this.gotResource("/characters?page=5&pageSize=10");
  };

  getCharacter = async (id) => {
    return this.gotResource(`/characters/${id}`);
  };

  getAllBooks = async () => {
    return this.gotResource(`/books`);
  };

  getSpecificBook = async (id) => {
    return this.gotResource(`/books/${id}`);
  };

  getAllHouses = async () => {
    return this.gotResource(`/houses`);
  };

  getSpecificHouse = async (id) => {
    return this.gotResource(`/houses/${id}`);
  };
}
