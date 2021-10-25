import axios from "axios";

//OOP
export class PixabayFetch {
  constructor(API_KEY, BASE_URL) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
    this._searchQuery = ""; //имя свойства, с которым работает геттер и сеттер (их имена одинаковые), должно отличаться. Для этого используем паттерн — нижнее подчеркивание
    this._page = 1;
    this.perPage = 12;
    this.imageType = "photo";
    this.imageOrient = "horizontal";
  }
  //так как мы передаем пустое значение для searchQuery, то необходимо ввести для них геттер ии сеттер
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  resetPage() {
    return (this._page = 1);
  }

  async searchPhotos() {
    axios.defaults.baseURL = this.BASE_URL;
    console.log("searchQ:", this.searchQuery, "page:", this.page);
    let url = `?q=${this.searchQuery}&page=${this.page}&key=${this.API_KEY}&image_type=${this.imageType}&orientation=${this.imageOrient}&per_page=${this.perPage}`;

    try {
      const result = await axios.get(url);
      const data = result.data.hits;
      return data;
    } catch (err) {
      return err.message;
    }
  }
}
