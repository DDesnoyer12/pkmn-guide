import { Component, OnInit } from '@angular/core';
import { Type, types, matchups } from '../../types';
import { Title } from '@angular/platform-browser';
import { type } from 'os';
@Component({
  selector: 'app-type-chart',
  templateUrl: './type-chart.component.html',
  styleUrls: ['./type-chart.component.css']
})

export class TypeChartComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Type Matchups");
    this.primaryType = Type.GRASS;
    this.secondaryType = null;
    window.onload = function () {
      document.getElementById('grass1').classList.add('selected');
      (<HTMLInputElement>document.getElementById("grass2")).disabled = true;
      document.getElementById('none').classList.add('selected');
    }
    this.calculateMatchups();
    console.log(this.secondaryType);
  }

  // Reference data from types.ts
  types = types;
  matchups = matchups;

  // Used to hold types selected by user
  primaryType: Type;
  secondaryType: Type;

  // Offense matchup placeholders

  // Defense matchup placeholders
  doubleSuperEffective: Type[];
  superEffective: Type[];
  normalDamage: Type[];
  resist: Type[];
  doubleResist: Type[];
  immune: Type[];

  /**
   * Updates selectedType1 with the Type selected on the page
   * Adds a background color to highlight the selected button.
   * @param type A Type from the Type enum in types.ts
   */
  setFirstType(type: Type) {
    this.primaryType = type;

    types.forEach(type => {
      document.getElementById(type + "1").classList.remove('selected');
      (<HTMLInputElement>document.getElementById(type + "2")).disabled = false;
    });
    document.getElementById(type + "1").classList.add('selected');
    (<HTMLInputElement>document.getElementById(type + "2")).disabled = true;
    this.calculateMatchups();
  }

  /**
   * Updates selectedType2 with the Type selected on the page.
   * Adds a background color to highlight the selected button.
   * @param type A Type from the Type enum in types.ts
   */
  setSecondType(type: Type) {
    this.secondaryType = type;

    types.forEach(type => {
      document.getElementById(type + "2").classList.remove('selected');
      (<HTMLInputElement>document.getElementById(type + "1")).disabled = false;
    });
    document.getElementById('none').classList.remove('selected');
    if (type) {
      document.getElementById(type + "2").classList.add('selected');
      (<HTMLInputElement>document.getElementById(type + "1")).disabled = true;
    } else {
      document.getElementById('none').classList.add('selected');
    }

    this.calculateMatchups();
  }

  calculateMatchups() {

    this.resetMatchups();

    if (this.secondaryType) {
      this.calculateMatchupDualType();
    } else {
      this.calculateMatchupSingleType();
    }
  }

  calculateMatchupDualType() {
    for (let i = 0; i < types.length; i++) {
      let t1Offense = matchups[i][types.indexOf(this.primaryType)];
      let t2Offense = matchups[i][types.indexOf(this.secondaryType)];
      let multiplier = t1Offense * t2Offense;

      switch (multiplier) {
        case 4:
          this.doubleSuperEffective.push(types[i]);
          break;
        case 2:
          this.superEffective.push(types[i]);
          break;
        case 1:
          this.normalDamage.push(types[i]);
          break;
        case 0:
          this.immune.push(types[i]);
          break;
        case 0.5:
          this.resist.push(types[i]);
          break;
        case 0.25:
          this.doubleResist.push(types[i]);
          break;
      }
    }
  }
  calculateMatchupSingleType() {
    for (let i = 0; i < types.length; i++) {
      let t1Offense = matchups[i][types.indexOf(this.primaryType)];
      switch (t1Offense) {
        case 2:
          this.superEffective.push(types[i]);
          break;
        case 1:
          this.normalDamage.push(types[i]);
          break;
        case 0: 
          this.immune.push(types[i]);
          break;
        case 0.5:
          this.resist.push(types[i]);
          break;
      }
    }
  }

  resetMatchups() {
    this.doubleSuperEffective = [];
    this.superEffective = [];
    this.normalDamage = [];
    this.resist = [];
    this.doubleResist = [];
    this.immune = [];
  }

  windowScroll() {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }



}
