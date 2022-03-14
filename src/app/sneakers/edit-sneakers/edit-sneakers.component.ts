import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-edit-sneakers',
  templateUrl: './edit-sneakers.component.html',
  styleUrls: ['./edit-sneakers.component.css']
})
export class EditSneakersComponent implements OnInit {

  editMode = false;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private sneakersService: SneakersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  form = this.fb.group({
    imagePath: ['', Validators.required],
    price: ['', Validators.required],
    name: ['', Validators.required],
    category: ['', Validators.required],
  });

  private initForm() {
    let imagePath = '';
    let name = '';
    let price;
    let category = '';

    if (this.editMode) {
      const sneaker = this.sneakersService.getSnicker(this.id);
      imagePath = sneaker.imagePath;
      name = sneaker.name;
      price = sneaker.price;
      category = sneaker.category;
    }

    this.form = this.fb.group({
      imagePath: [imagePath, Validators.required],
      name: [name, Validators.required],
      price: [price, Validators.required],
      category: [category, Validators.required],
    });
  }

  onCancel() {
    this.router.navigate(['../']);
  }

  onSubmit(form: FormGroup) {
    if (this.editMode) {
      this.sneakersService.updateSnicker(this.id, this.form.value);
    } else {
      this.sneakersService.addSnicker(this.form.value);
    }
    this.onCancel();

    console.log('f', form);
    console.log('f.val', form.value);
  }
}
