import { Component, OnInit } from '@angular/core';
import { DogApiService } from 'src/app/shared/services/dog-api.service';
import { Dog } from 'src/app/shared/models/dog';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.styl']
})
export class BreedListComponent implements OnInit {

  breedsList: Array<Dog> = [];
  error: string;

  constructor(private dogApi: DogApiService) { }

  ngOnInit() {
    this.dogApi.getBreedsListAll()
      .subscribe(
      (dataBreedsList: any) => {
        const breedsListAll = [];
        const breeds = Object.keys(dataBreedsList.message);

        breeds.forEach((breed, index) => {
          if (dataBreedsList.message[breed].length > 0) {
            dataBreedsList.message[breed].forEach(subBreed => {
              breedsListAll.push(`${breeds[index]}/${subBreed}`);
            });
          } else {
            breedsListAll.push(breed);
          }
        });

        breedsListAll.forEach(breed => {
          this.dogApi.getBreedImage(breed)
            .subscribe(
            (dataBreedImage: any) => {
              const breedImage = dataBreedImage.message;
              this.breedsList.push({ title: breed, image: breedImage });
              console.log('lista de raza: ', this.breedsList);
            },
            error => {
              this.error = 'Error al conectarse con el servidor';
            });
        });
      },
      error => {
        this.error = 'Error al conectarse con el servidor';
      });
  }

}
