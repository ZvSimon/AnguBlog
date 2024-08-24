import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { NgStyle } from '@angular/common';
import { headerData } from '../../data/headerData';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, NgStyle,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = headerData.items;

  ngOnInit() {}


}
