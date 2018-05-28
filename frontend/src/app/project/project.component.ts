import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  data = {
    NAME: 'GLUEV',
    ARTICLE: '7AK-01',
    DESCRIPTION: 'Полиграфический дизайн каталогов "GLUEV"',
    NOTE: 'Не следует, однако забывать, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также консультация с широким активом требуют определения и уточнения существенных финансовых и административных условий.',
    IMAGES: [
      '../../assets/images/project/1.jpg',
      '../../assets/images/project/2.jpg',
      '../../assets/images/project/3.jpg'
    ]
  }

  dataSame = [
    {
      NAME: "Название проекта",
      SECTION: "Название раздела",
      PREVIEW_IMAGE: "../../assets/images/project/same-1.jpg",
    },
    {
      NAME: "Название проекта",
      SECTION: "Название раздела",
      PREVIEW_IMAGE: "../../assets/images/project/same-2.jpg",
    },
    {
      NAME: "Название проекта",
      SECTION: "Название раздела",
      PREVIEW_IMAGE: "../../assets/images/project/same-3.jpg",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  public onTop(): void {
    window.scrollTo(0, 0);
  }

}
