import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeListComponent } from './employee-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'employee',
      component: EmployeeListComponent,
      title: 'Employee details'
    }

  ];
  
  export default routeConfig;