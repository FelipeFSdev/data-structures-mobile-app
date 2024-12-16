import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseApiUrl: string = "http://localhost:8000/page"
  constructor() { }

  public async getPage(title: string) {
    try {
      const res = await axios({
        method: "get",
        url: `${this.baseApiUrl}/${title}`
      })

      return res.data

    } catch (error) {
      return error
    }
  }
}
