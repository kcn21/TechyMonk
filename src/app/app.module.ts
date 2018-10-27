import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { AtComponent } from './at/at.component';
import { PocoComponent } from './poco/poco.component';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VivoComponent } from './vivo/vivo.component';
import { CameraComponent } from './camera/camera.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';
import { GmailComponent } from './gmail/gmail.component';
import { MsComponent } from './ms/ms.component';
import { ShaktiComponent } from './shakti/shakti.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';

const routes : Routes=[
    {path:' ',redirectTo:'at',pathMatch:'full'},
    {path:'at',component:AtComponent},
    {path:'deals',component:DealsComponent},
    {path:'poco',component:PocoComponent},
    {path:'login',component:LoginComponent},
    {path:'vivo',component:VivoComponent},
    {path:'camera',component:CameraComponent},
    {path:'cart',component:CartComponent},
    {path:'blog',component:BlogComponent},
    {path:'gmail',component:GmailComponent},
    {path:'ms',component:MsComponent},
    {path:'confirm',component:ConfirmComponent},
    {path:'shakti',component:ShaktiComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',component:AtComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    AtComponent,
    PocoComponent,
    LoginComponent,
    VivoComponent,
    CameraComponent,
    CartComponent,
    CheckoutComponent,
    BlogComponent,
    GmailComponent,
    MsComponent,
    ShaktiComponent,
    ConfirmComponent,
    SignupComponent,
    FooterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [AuthServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
