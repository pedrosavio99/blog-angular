import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../big-card/big-card.component';
import { SmallCardComponent } from '../small-card/small-card.component';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPost: Post | undefined = undefined;
  posts: Post[] = [];
  isLoading: boolean = true; // Estado de carregamento

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.featuredPost = posts.find(post => post.id === 1); // Post Destaque
      this.posts = posts.filter(post => post.id !== 1); // Todos os outros posts
      this.isLoading = false; // Desativa o estado de carregamento
    });
  }
}