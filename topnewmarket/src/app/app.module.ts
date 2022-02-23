import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseradComponent } from './user/userad/userad.component';
import { UserclComponent } from './user/usercl/usercl.component';
import { ConnecterComponent } from './connexion/connecter/connecter.component';
import { CreercompteComponent } from './connexion/creercompte/creercompte.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ListearticleComponent } from './listearticle/listearticle.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';

@NgModule({
  declarations: [
    AppComponent,
    UseradComponent,
    UserclComponent,
    ConnecterComponent,
    CreercompteComponent,
    HeaderComponent,
    ArticleComponent,
    ListearticleComponent,
    SinglearticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
