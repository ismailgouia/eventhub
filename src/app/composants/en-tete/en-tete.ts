import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Session } from '../../services/session';
@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  protected session=inject(Session);
}
