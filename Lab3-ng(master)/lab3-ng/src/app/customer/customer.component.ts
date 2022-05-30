import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "../Models/customer";
import * as jwt_decode from "jwt-decode";
@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
})

export class CustomerComponent {
    Customers: Array<Customer>;
    isAddNew: boolean;
    FirstName: string;
    LastName: string;
    @ViewChild('myForm')
    CustomerForm!: NgForm;
    LoginUserFirstName:string="Sir";
    constructor() {
        
        const decodedToken = jwt_decode(localStorage.token);
        this.LoginUserFirstName=decodedToken.firstName;
        this.FirstName = "";
        this.LastName = "";
        this.isAddNew = false;
        //this.Reset();
        this.Customers = new Array<Customer>();
        this.Customers.push(new Customer("Rahul", "Nandy"));
        this.Customers.push(new Customer("Pratik", "Patil"));
        this.Customers.push(new Customer("Rishav", "Tewari"));

    }
    Reset() {
        //this.FirstName="";
        //this.LastName="";
        this.CustomerForm.reset();
    }
    Save() {
        this.Customers.push(new Customer(this.FirstName, this.LastName));
        this.isAddNew = false;
        this.Reset();
    }
    AddNew() {
        this.isAddNew = true;
    }
    Cancel() {
        this.isAddNew = false;
        this.Reset();
    }
    logout(){
         localStorage.clear();
    }   
     //    ChangeFirstName(value:string)
    //    {
    //        this.FirstName=value;
    //    }
    //    ChangeLastName(value: string)
    //    {
    //        this.LastName=(value);
    //    }
}