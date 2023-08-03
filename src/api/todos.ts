import ExternalAPI from 'src/libs/axios';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoSearch = {
  _limit?: number;
  _page?: number;
};

export class Todos extends ExternalAPI {
  getList(url: string, params: TodoSearch = {}) {
    return this.get(url, { params, data: {} });
  }

  getDetail(url: string) {
    return this.get(url);
  }
}

export default new Todos();
