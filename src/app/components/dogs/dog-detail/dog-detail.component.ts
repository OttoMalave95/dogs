import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogApiService } from 'src/app/shared/services/dog-api.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.styl']
})
export class DogDetailComponent implements OnInit {

  dogImages: Array<any> = [];
  breed: string;
  error: string;

  constructor(
    private dogApi: DogApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.breed = this.route.snapshot.paramMap.get('breed');
    this.dogApi.getBreedImages(this.breed)
    .subscribe(
    (data: any) => {
      this.dogImages = data.message;
    },
    error => {
      this.error = 'Error al conectarse con el servidor';
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

}
