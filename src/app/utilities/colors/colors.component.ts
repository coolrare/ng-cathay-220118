import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type = 0;

  name: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.type = this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe({
      next: (params) => {
        this.type = +(params.get('type') ?? 0);
      }
    });

    // Outdated API
    // this.route.params.subscribe({
    //   next: (params) => {
    //     this.type = params['type'];
    //   }
    // });

    // this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.queryParamMap.subscribe({
      next: (params) => {
        this.name = params.get('name');
      }
    });

  }

  goType1(id: number) {
    this.router.navigateByUrl('/utilities/colors/' + (this.type + id));
  }

  goType2(id: number) {
    this.router.navigate(['/utilities/colors', (this.type + id)], {
      queryParamsHandling: 'merge',
      queryParams: {
        name: 'John'
      }
    });
  }

}
