import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Home } from "./home/home";
import { NavBar } from "./nav-bar/nav-bar";
import { Footer } from "./footer/footer";
import { FormComponent } from "./form-component/form-component";
import { Products } from './products/products';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NavBar, Footer, CommonModule, RouterModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'NaturalFarm';
}
