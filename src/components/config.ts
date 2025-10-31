class Config {

  apiUrl: string;
  timeout: number;
  apiUrl1: string;

  constructor() {
    this.apiUrl = 'http://localhost:4000/platform';
    this.apiUrl1 = 'loca'
    this.timeout = 5000;
  }
}

export default new Config();
