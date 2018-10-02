import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  private ingredientRegXpPattern: RegExp = /^[1-9]+[0-9]*$/;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const { value: newRecipe } = this.recipeForm;
    this.editMode
      ? this.recipeService.updateRecipe(this.id, newRecipe)
      : this.recipeService.addRecipe(newRecipe);
    this.onCencel();
  }

  onAddIngredirnt() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,
          [Validators.required, Validators.pattern(this.ingredientRegXpPattern)]
        )
      })
    );
  }

  onCencel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    const RECIPE = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: new FormArray([])
    };

    if (this.editMode) {
      const { name, imagePath, description, ingredients } = this.recipeService.getRecipe(this.id);
      RECIPE.name = name;
      RECIPE.imagePath = imagePath;
      RECIPE.description = description;

      // tslint:disable-next-line:no-unused-expression
      ingredients && ingredients.forEach(({ name: ingName, amount: ingAmount }) => {
        RECIPE.ingredients.push(
          new FormGroup({
            'name': new FormControl(ingName, Validators.required),
            'amount': new FormControl(ingAmount,
                [Validators.required, Validators.pattern(this.ingredientRegXpPattern)]
              )
          })
        );
      });

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(RECIPE.name, Validators.required),
      'imagePath': new FormControl(RECIPE.imagePath, Validators.required),
      'description': new FormControl(RECIPE.description, Validators.required),
      'ingredients': <FormArray>RECIPE.ingredients
    });
  }
}
