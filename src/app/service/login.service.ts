import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = "https://data-structures-mobile-app-backend-felipefsdevs-projects.vercel.app/";
  private token: string = "";

  constructor() { }

  public async getAuth(user: {
    email: string,
    password: string
  }): Promise<any> {
    try {
      const res = await axios({
        method: "post",
        url: `https://cors-anywhere.herokuapp.com/${this.baseApiUrl}/login`,
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
