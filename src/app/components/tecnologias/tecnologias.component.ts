import { Component } from '@angular/core';
import { SectionArticleComponent } from '../section-article/section-article.component';
import { GithubComponent } from '../icons/github/github.component';
import { HtmlComponent } from '../icons/html/html.component';
import { CssComponent } from '../icons/css/css.component';
import { JsComponent } from '../icons/js/js.component';
import { AngularComponent } from '../icons/angular/angular.component';
import { LaravelComponent } from '../icons/laravel/laravel.component';
import { GitComponent } from '../icons/git/git.component';
import { DockerComponent } from '../icons/docker/docker.component';
import { TailwindComponent } from '../icons/tailwind/tailwind.component';
import { TypescriptComponent } from '../icons/typescript/typescript.component';
import { BootstrapComponent } from '../icons/bootstrap/bootstrap.component';
import { SqlComponent } from '../icons/sql/sql.component';
import { GitlabComponent } from '../icons/gitlab/gitlab.component';
import { MongoComponent } from '../icons/mongo/mongo.component';
import { MaterialComponent } from '../icons/material/material.component';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [SectionArticleComponent, GithubComponent, HtmlComponent, CssComponent, JsComponent, AngularComponent, LaravelComponent, GitComponent, DockerComponent, TailwindComponent, TypescriptComponent, BootstrapComponent, SqlComponent, GitlabComponent, MongoComponent, MaterialComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {

}
