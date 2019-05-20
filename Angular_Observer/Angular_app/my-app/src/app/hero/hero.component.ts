import { Component, OnInit, Input, OnChanges,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
DoCheck,
OnDestroy,
SimpleChange,
SimpleChanges,
Output,
EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit,OnChanges,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck,OnDestroy {

  @Input() heroName:string;
  @Output()customEvent:EventEmitter<string>= new EventEmitter();
  @Input() enableParagraph:boolean;
  constructor() { }
  
  kickHero(){
    this.customEvent.emit(` mamma mia ${this.heroName}`);
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("change", changes)
  }
  ngAfterContentChecked():void{
    console.log("checked")
  }
  ngAfterContentInit():void{
    console.log("init content")
  } 
  ngAfterViewChecked():void{
    console.log("view check")
  }
  ngAfterViewInit():void{
    console.log("view init")
  }
  ngDoCheck():void{
    console.log("do check")
  }
  ngOnDestroy():void{
    console.log("destory")
  }
  ngOnInit() {
  }

}
