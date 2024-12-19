import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = "http://localhost:8000";
  private token: string = "";

  constructor() { }

  public async getAuth(user: {
    email: string,
    password: string
  }): Promise<any> {
    try {
      const res = await axios({
        method: "post",
        url: `${this.baseApiUrl}/login`,
        data: user
      });
      res.data.token ? this.setToken(res.data.token) : "";

      return res.data

    } catch (error) {
      return error
    }
  }

  public setToken(authToken: string): void {
    this.token = authToken;
  }
  public getToken(): string {
    return this.token;
  }
}
