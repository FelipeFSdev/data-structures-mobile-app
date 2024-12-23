import { Injectable } from '@angular/core';
import axios from "axios"
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseApiUrl: string = "https://data-structures-mobile-app-backend-felipefsdevs-projects.vercel.app/"
  constructor(private loginService: LoginService) { }

  public async getPage(title: string) {
    try {
      const res = await axios({
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/${this.baseApiUrl}/${title}`,
        headers: { Authorization: `Bearer ${this.loginService.getToken()}` }
      })

      return res.data

    } catch (error) {
      return error
    }
  }
}
