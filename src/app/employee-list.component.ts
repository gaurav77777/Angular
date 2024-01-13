import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './employee'

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }
}
