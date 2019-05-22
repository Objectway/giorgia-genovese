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
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit,OnChanges,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck,OnDestroy {

  @Input() heroName:string;
  @Output()customEvent:EventEmitter<string>= new EventEmitter();
  @Input() enableParagraph:boolean;
  private heroList: Hero[];
  constructor(private heroService: HeroService, private router: Router) { }
  
  goToDetail(id){
    this.router.navigate(['/heroes',id]);
  }
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
    this.heroService.getHero().subscribe((response:Hero[])=>{
      this.heroList=response;
    });
  }

}
