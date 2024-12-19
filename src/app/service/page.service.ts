import { Injectable } from '@angular/core';
import axios from "axios"
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseApiUrl: string = "http://localhost:8000/page"
  constructor(private loginService: LoginService) { }

  public async getPage(title: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${this.baseApiUrl}/${title}`,
        headers: { Authorization: `Bearer ${this.loginService.getToken()}` }
      })

      return res.data

    } catch (error) {
      return error
    }
  }
}
