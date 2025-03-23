import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para usar *ngFor e *ngIf
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    });
  }
}