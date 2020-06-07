import { Component, OnInit } from "@angular/core";
import { SharedService } from "./service/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private service: SharedService) {}
  ngOnInit() {}
  data() {
    this.service.getdata().subscribe(
      (data) => console.log("Data == >", data),
      (err) => console.log("Error == >", err)
    );
  }
}
