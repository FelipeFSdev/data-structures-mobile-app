import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseApiUrl: string = "https://data-structures-mobile-app-backend-felipefsdevs-projects.vercel.app/";
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
        url: `https://cors-anywhere.herokuapp.com/${this.baseApiUrl}/create`,
        data: user
      })
      return res.data

    } catch (error) {
      return error
    }

  }
}
