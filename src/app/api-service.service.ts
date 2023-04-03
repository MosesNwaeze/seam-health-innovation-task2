import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient:HttpClient) { }

  getRequest(){
    return this.httpClient.get(this.baseUrl)
  }
}
