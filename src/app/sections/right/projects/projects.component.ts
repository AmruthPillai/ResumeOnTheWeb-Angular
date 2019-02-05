import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'CS VTU Lab Manual',
      tags: ['Open Source', 'Programming', 'Education'],
      description: 'A one-stop solution to all the part and parcel of VTU CS Labs. Completely\
        documeted for any CS student under the VTU Syllabus to grasp and understand.',
      github: 'https://github.com/AmruthPillai/CS-VTU-Lab-Manual',
    },
    {
      title: 'Breast Cancer Classification',
      tags: ['Open Source', 'Machine Learning', 'Health'],
      description: 'A demonstration of an automated methodology to predict if a sample is benign\
        or malignant given measurements of nuclear shape that were made from digital images of fine\
        needle aspirates of breast tissue masses from clinical samples.',
      github: 'https://github.com/AmruthPillai/ML-Breast-Cancer-Classification',
    },
    {
      title: 'Project Step, Jump & Meet',
      tags: ['Open Source', 'Game Design', 'Web Development'],
      description: 'A fun and innovative new game that puzzles you to the bone, developed using HTML, CSS & Javascript.',
      github: 'https://github.com/AmruthPillai/Project-Step-Jump-Meet',
    },
    {
      title: 'Ethereum Voting Blockchain',
      tags: ['Open Source', 'Blockchain'],
      description: 'A Smart Contract Voting System based on the Ethereum Blockchain Network, learning how to design\
        Decentralized Web Applications on Solidity.',
      github: 'https://github.com/AmruthPillai/Ethereum-Voting-Blockchain',
    },
    {
      title: 'AMFI/Morningstar Mutual Fund Scraper',
      tags: ['Bespoke', 'Python', 'Scripting'],
      description: 'Custom scripts written that were used in production applications for the usage of AMFI and Morningstar India\
        data from their respective websites. This included scraping vital information and storing it in databases.',
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
