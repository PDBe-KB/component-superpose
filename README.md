PDBe-KB Superpose Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-superpose.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-superpose)
[![codecov](https://codecov.io/gh/PDBe-KB/component-superpose/branch/master/graph/badge.svg?token=wDmfiy2Cje)](https://codecov.io/gh/PDBe-KB/component-superpose)
[![Maintainability](https://api.codeclimate.com/v1/badges/c47cb6b2a01acfa1b4fa/maintainability)](https://codeclimate.com/github/PDBe-KB/component-superpose/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that displays a button that can open a MolStar dialog window.

This web component is used on PDBe-KB Aggregated Views of Proteins to display superposed macromolecular structures and ligands.

Note: This component uses the "molstar-dialog" web component available at [https://github.com/PDBe-KB/component-molstar-dialog](https://github.com/PDBe-KB/component-molstar-dialog)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-superpose/main/pdbe-kb-superpose.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-superpose.git
cd component-superpose
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds two other PDBe-KB web components: [https://github.com/PDBe-KB/component-molstar-dialog](https://github.com/PDBe-KB/component-molstar-dialog)

In order to use all the features of this web component, retrieve the "molstar-dialog" component and replace the contents of the `src/app/molstar-dialog` folder with those files.


The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SuperposeComponent} from './superpose/superpose.component';
import {MatDialogModule} from '@angular/material';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperposeComponent,
    MolstarDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

#### 2.) Add the component to a template:
```angular2html
<app-superpose [superposeModalData]="data" label="View all ligands" tooltip="View all the ligands superposed on this protein"></app-superpose>
```

##### Example input data

```angular2html
{
    "accession": "P31800",
    "superposition": true,
    "superpositionParams": {
        "segment": 1,
        "ligandView": true,
        "superposeAll": true
    }
}
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-superpose/tags).

## Authors

* **Nurul Nadzirin** - *Initial Implementation* - [nurulnad](https://github.com/nurulnad)
* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-superpose/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
