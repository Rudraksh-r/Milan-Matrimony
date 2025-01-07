import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonDetailsComponent } from './profile/components/step1/person-details.component';
import { EduDetailsComponent } from './profile/components/step2/edu-details.component';
import { FamilyDetailsComponent } from './profile/components/step3/family-details.component';
import { GetOTPComponent } from './get-otp/get-otp.component';
import { MyShaadiComponent } from './my-shaadi/my-shaadi.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'sign-up', component: SignUpComponent },
    { path: 'verify', component: GetOTPComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'step1', component: PersonDetailsComponent},
    { path: 'step2', component: EduDetailsComponent },
    { path: 'step3', component: FamilyDetailsComponent },
    { path: 'my-shaadi', component: MyShaadiComponent },
];
