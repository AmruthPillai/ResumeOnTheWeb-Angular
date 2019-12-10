import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-design-projects',
  templateUrl: './design-projects.component.html',
  styleUrls: ['./design-projects.component.scss']
})
export class DesignProjectsComponent implements OnInit {
  faDribbble = faDribbble;

  graphicDesignProjects = [
    {
      src: '/assets/design/graphic/bgbaliga.png',
      caption: 'BG Baliga Travel Diary',
      thumb: ''
    },
    {
      src: '/assets/design/graphic/dsce-kalaarnava.png',
      caption: 'DSCE Kalaarnava',
      thumb: ''
    },
    {
      src: '/assets/design/graphic/dsit-typography.jpg',
      caption: 'DSI Typography',
      thumb: ''
    },
    {
      src: '/assets/design/graphic/therabot.jpg',
      caption: 'Therabot',
      thumb: ''
    }
  ];

  webDesignProjects = [
    {
      src: '/assets/design/web/calamitycontrol.png',
      caption: 'Calamity Control',
      thumb: ''
    },
    {
      src: '/assets/design/web/coetec.png',
      caption: 'CoETEC',
      thumb: ''
    },
    {
      src: '/assets/design/web/dscealumnimeet.png',
      caption: 'DSCE Alumni Meet',
      thumb: ''
    },
    {
      src: '/assets/design/web/madrasibride.png',
      caption: 'Madrasi Bride',
      thumb: ''
    }
  ];

  uiuxDesignProjects = [
    {
      src: '/assets/design/uiux/circle-music-player.jpg',
      caption: 'Circle Music Player',
      thumb: ''
    },
    {
      src: '/assets/design/uiux/material-auth.png',
      caption: 'Material Design Authentication',
      thumb: ''
    },
    {
      src: '/assets/design/uiux/vapordrive.jpg',
      caption: 'VaporDrive',
      thumb: ''
    },
    {
      src: '/assets/design/uiux/whatsapp.jpg',
      caption: 'WhatsApp Redesign',
      thumb: ''
    }
  ];

  printDesignProjects = [
    {
      src: '/assets/design/print/benignora.png',
      caption: 'Benignora',
      thumb: ''
    },
    {
      src: '/assets/design/print/blood-donation.jpg',
      caption: 'Sagar Hospitals Blood Donation Camp',
      thumb: ''
    },
    {
      src: '/assets/design/print/dsce-cultural-activities.jpg',
      caption: 'DSCE CSE Cultural Festival',
      thumb: ''
    },
    {
      src: '/assets/design/print/dsce-paper-presentation.png',
      caption: 'DSCE Paper Presentation Poster',
      thumb: ''
    }
  ];

  constructor(private _lightbox: Lightbox) {}

  ngOnInit() {}

  open(gallery: string, index: number): void {
    switch (gallery) {
      case 'graphic':
        this._lightbox.open(this.graphicDesignProjects, index);
        break;
      case 'web':
        this._lightbox.open(this.webDesignProjects, index);
        break;
      case 'uiux':
        this._lightbox.open(this.uiuxDesignProjects, index);
        break;
      case 'print':
        this._lightbox.open(this.printDesignProjects, index);
        break;
      default:
        break;
    }
  }
}
