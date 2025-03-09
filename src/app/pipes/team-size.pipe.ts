import { Pipe, PipeTransform } from '@angular/core';
import { project } from '../model/project';

@Pipe({
  name: 'teamSizeFilter',
})
export class TeamSizeFilterPipe implements PipeTransform {
  transform(projects: project[], minSize: number, maxSize: number): project[] {
    if (!projects) return [];
    if (!minSize && !maxSize) return projects;
    return projects.filter((project) => {
      return project.teamSize >= minSize && project.teamSize <= maxSize;
    });
  }
}
