import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupAPIService {
  constructor() {}

  getBloodGroupList() {
    return [
      {
        bloodGroup: 'A',
      },
      {
        bloodGroup: 'B',
      },
      {
        bloodGroup: 'C',
      },
      {
        bloodGroup: 'D',
      },
      {
        bloodGroup: 'E',
      },
    ];
  }
}
