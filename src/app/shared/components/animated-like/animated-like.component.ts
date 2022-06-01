import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScriptService } from 'src/app/script/script.service';

@Component({
  selector: 'app-animated-like',
  templateUrl: './animated-like.component.html',
  styleUrls: ['./animated-like.component.scss'],
})
export class AnimatedLikeComponent implements OnInit {
 
  constructor(private readonly scripty: ScriptService) {}
    ngOnInit(): void {
        this.scripty
            .load('like')
            .then((data) => {
                console.log('script loaded ', data);
            })
            .catch((error) => console.log(error));
    }
}