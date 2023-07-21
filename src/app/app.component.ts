import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSecretShown: boolean = false;
  logs: { item: number, timestamp: Date }[] = [];

  onToggleDetails(): void {
    this.isSecretShown = !this.isSecretShown;
    this.logs.push({ item: this.logs.length + 1, timestamp: new Date() });
  }
}
