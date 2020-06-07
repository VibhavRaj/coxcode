import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4200",
  }),
};
@Injectable({
  providedIn: "root",
})
export class SharedService {
  url =
    "https://cncdigitalgyan.teachable.com/api/v1/hooks/example?event_type=Enrollment.created";
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.get(this.url, httpOptions);
  }
}
