import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-work',
  templateUrl: './volunteer-work.component.html',
  styleUrls: ['./volunteer-work.component.scss']
})
export class VolunteerWorkComponent implements OnInit {
  volunteerWork = [
    {
      title: 'Lead Organizer of a Blood Donation Drive',
      description:
        'Oversaw close to 1000+ students actively participating in the Donation Drive which was organized at Sagar Hospitals, Bengaluru.'
    },
    {
      title: 'Development of CalamityControl.com',
      description:
        'A project created at the nick of time to crowd-source disaster information and get a more\
        detailed area-by-area view on the safezones of a calamity struck area, compared to the disaster safety check by Facebook.'
    },
    {
      title: 'Development of ChennaiRains.org',
      description:
        'A crowd-sourced repository of information created overnight that was used at a time of dire\
        need by many people stranded in the floods of Chennai and surrounding areas.',
      link:
        'http://blog.venturesity.com/heres-amruth-pillai-used-hacking-skills-help-people-chennai'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
