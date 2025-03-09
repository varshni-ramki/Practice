import { Component } from '@angular/core';
import { project } from '../../model/project';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projectslist: project[] = [];
  minTeam: number = 0;
  maxTeam: number = 100;
  selectedStatus: string = 'All';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (result: project[]) => (this.projectslist = result),
      error: (error) => console.log(error),
    });
  }
}
