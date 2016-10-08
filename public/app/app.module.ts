import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './components/app.component';
import {HeaderComponent} from "./components/header.component";
import {CarouselComponent} from "./components/carousel.component";
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HeaderComponent, CarouselComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
