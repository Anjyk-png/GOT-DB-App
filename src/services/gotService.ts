export default class GotService {
  protected _apiBase: string;

  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  async gotResource(url: string): Promise<any> {
    const res: Response = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async (): Promise<any> => {
    return this.gotResource("/characters?page=5&pageSize=10");
  };

  getCharacter = async (id: number): Promise<any> => {
    return this.gotResource(`/characters/${id}`);
  };

  getAllBooks = async (): Promise<any> => {
    return this.gotResource(`/books`);
  };

  getSpecificBook = async (id: number): Promise<any> => {
    return this.gotResource(`/books/${id}`);
  };

  getAllHouses = async (): Promise<any> => {
    return this.gotResource(`/houses`);
  };

  getSpecificHouse = async (id: number): Promise<any> => {
    return this.gotResource(`/houses/${id}`);
  };
}
