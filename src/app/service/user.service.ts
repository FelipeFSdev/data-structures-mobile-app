import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseApiUrl: string = "http://localhost:8000/user";
  constructor() { }

  public async createUser(user: {
    name: string,
    email: string | any,
    password: string | any
  }
  ): Promise<any> {
    try {
      const res = await axios({
        method: "post",
        url: `${this.baseApiUrl}/create`,
        data: user
      })
      return res.data

    } catch (error) {
      return error
    }

  }
}
