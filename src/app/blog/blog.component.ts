import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#second").click(function(){
        $("#one").addClass("show");
        $("#three").removeClass("show");
        $("#two").removeClass("show");
      });
    });
    $(document).ready(function(){  
      $("#first").click(function(){
        $("#two").addClass("show");
        $("#one").removeClass("show");
        $("#three").addClass("show");
      });
    });
    $(document).ready(function(){
      $("#third").click(function(){
        $("#three").addClass("show");
        $("#one").addClass("show");
        $("#two").addClass("show");
      });
    });
  }
}
