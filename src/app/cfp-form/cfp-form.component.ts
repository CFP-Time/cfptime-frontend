import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ValidateUrl, ValidateTwitterHandle } from '../validators/validators';
import { CfptimeService } from '../cfptime.service';
import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
    selector: 'app-cfp-form',
    templateUrl: './cfp-form.component.html',
    styleUrls: ['./cfp-form.component.scss'],
    standalone: false
})

export class CfpFormComponent implements OnInit {
  // private name: string;
  // private cfp_deadline: Date;
  // private conf_start_date: Date;
  // private city: string;
  // private province: string;
  // private country: string;
  // private twitter: string;
  // private website: string;
  // private cfp_details: string;
  // private speaker_benefits: string;
  // private code_of_conduct: string;
  // private number_of_days: 1;
  flagForm: FormGroup;

  flagFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder, private api: CfptimeService, private dialog: SubmitDialogComponent, private errorDialog: ErrorDialogComponent) { }

  ngOnInit() {
    let date = new Date()
    console.log(date.toISOString());
    // this.errorDialog.openDialog();
    // let data = {
    //   "name": "coucou",
    //   "cfp_deadline": "2020-01-20T23:13:37.017Z",
    //   "conf_start_date": "2020-01-20T09:13:37.017Z",
    //   "city": "dkjskj",
    //   "province": "skjsdkfj",
    //   "country": "AL",
    //   "twitter": "@CFP_Time",
    //   "website": "https://www.google.fr",
    //   "cfp_details": "coucou details",
    //   "speaker_benefits": "coucou benefits",
    //   "code_of_conduct": "https://www.google.fr",
    //   "number_of_days": "2"    
    // }
    // this.api.postNewConference(data).subscribe(res => {
    //   console.log(res);
    // });

    this.flagForm = this.fb.group({
      name: ['', [Validators.required],],
      cfp_deadline: ['', [Validators.required],], 
      conf_start_date: ['', [Validators.required],], 
      city: ['', [Validators.required],], 
      province: ['', [Validators.required],], 
      country: ['', [Validators.required],], 
      twitter: ['', [Validators.required, ValidateTwitterHandle],], 
      website: ['', [Validators.required, ValidateUrl],],
      cfp_details: ['', [Validators.required],], 
      speaker_benefits: ['', [Validators.required],], 
      code_of_conduct: ['', [Validators.required, ValidateUrl],], 
      number_of_days: ['', [Validators.required],], 
    })
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  submit() {
    let cfp_deadline = this.formatDate(this.flagForm.get('cfp_deadline').value);
    cfp_deadline = cfp_deadline + 'T23:13:37.017Z'
    // console.log(cfp_deadline);

    let conf_start_date = this.formatDate(this.flagForm.get('conf_start_date').value);
    conf_start_date = conf_start_date + 'T09:13:37.017Z'
    // console.log(conf_start_date);

    console.log(this.flagForm.get('name').value);

    let data = {
      "name": this.flagForm.get('name').value,
      "cfp_deadline": cfp_deadline,
      "conf_start_date": conf_start_date,
      "city": this.flagForm.get('city').value,
      "province": this.flagForm.get('province').value,
      "country": this.flagForm.get('country').value,
      "twitter": this.flagForm.get('twitter').value,
      "website": this.flagForm.get('website').value,
      "cfp_details": this.flagForm.get('cfp_details').value,
      "speaker_benefits": this.flagForm.get('speaker_benefits').value,
      "code_of_conduct": this.flagForm.get('code_of_conduct').value,
      "number_of_days": this.flagForm.get('number_of_days').value
    }
    console.log(data);

    this.api.postNewConference(data).subscribe(res => {
      this.dialog.openDialog();
      console.log(res);
      console.log('success');
    },
    error => {
      console.log('error');
      this.errorDialog.openDialog();
    })
  }

  // save() {
  //   this.dialogRef.close();
  // }

  // close() {
  //   this.dialogRef.close();
  // }

    public countries = [
    {
      code: 'AF',
      name: 'Afghanistan'
    }, {
      code: 'AL',
      name: 'Albania'
    }, {
      code: 'DZ',
      name: 'Algeria'
    }, {
      code: 'AS',
      name: 'American Samoa'
    }, {
      code: 'AD',
      name: 'Andorre'
    }, {
      code: 'AO',
      name: 'Angola'
    }, {
      code: 'AI',
      name: 'Anguilla'
    }, {
      code: 'AQ',
      name: 'Antarctica'
    }, {
      code: 'AG',
      name: 'Antigua and Barbuda'
    }, {
      code: 'AR',
      name: 'Argentina'
    }, {
      code: 'AM',
      name: 'Armenia'
    }, {
      code: 'AW',
      name: 'Aruba'
    }, {
      code: 'AU',
      name: 'Australia'
    }, {
      code: 'AT',
      name: 'Austria'
    }, {
      code: 'AZ',
      name: 'Azerbaijan'
    }, {
      code: 'BS',
      name: 'Bahamas'
    }, {
      code: 'BH',
      name: 'Bahrain'
    }, {
      code: 'BD',
      name: 'Bangladesh'
    }, {
      code: 'BB',
      name: 'Barbade'
    }, {
      code: 'BY',
      name: 'Belarus'
    }, {
      code: 'BE',
      name: 'Belgium'
    }, {
      code: 'BZ',
      name: 'Belize'
    }, {
      code: 'BJ',
      name: 'Benin'
    }, {
      code: 'BM',
      name: 'Bermuda'
    }, {
      code: 'BT',
      name: 'Bhutan'
    }, {
      code: 'BO',
      name: 'Bolivia'
    }, {
      code: 'BQ',
      name: 'Bonaire, Sint Eustatius and Saba'
    }, {
      code: 'BA',
      name: 'Bosnia and Herzegovina'
    }, {
      code: 'BW',
      name: 'Botswana'
    }, {
      code: 'BV',
      name: 'Bouvet Island'
    }, {
      code: 'BR',
      name: 'Brazil'
    }, {
      code: 'IO',
      name: 'British Indian Ocean Territory'
    }, {
      code: 'VG',
      name: 'British Virgin Islands'
    }, {
      code: 'BN',
      name: 'Brunei'
    }, {
      code: 'BG',
      name: 'Bulgaria'
    }, {
      code: 'BF',
      name: 'Burkina Faso'
    }, {
      code: 'BI',
      name: 'Burundi'
    }, {
      code: 'KH',
      name: 'Cambodia'
    }, {
      code: 'CM',
      name: 'Cameroon'
    }, {
      code: 'CA',
      name: 'Canada'
    }, {
      code: 'CV',
      name: 'Cape Verde'
    }, {
      code: 'KY',
      name: 'Cayman Islands'
    }, {
      code: 'CF',
      name: 'Central African Republic'
    }, {
      code: 'TD',
      name: 'Chad'
    }, {
      code: 'CL',
      name: 'Chile'
    }, {
      code: 'CN',
      name: 'China'
    }, {
      code: 'CX',
      name: 'Christmas Island'
    }, {
      code: 'CC',
      name: 'Cocos (Keeling) Islands'
    }, {
      code: 'CO',
      name: 'Colombia'
    }, {
      code: 'KM',
      name: 'Comoros'
    }, {
      code: 'CG',
      name: 'Congo'
    }, {
      code: 'CD',
      name: 'Congo (Dem. Rep.)'
    }, {
      code: 'CK',
      name: 'Cook Islands'
    }, {
      code: 'CR',
      name: 'Costa Rica'
    }, {
      code: 'ME',
      name: 'Crna Gora'
    }, {
      code: 'HR',
      name: 'Croatia'
    }, {
      code: 'CU',
      name: 'Cuba'
    }, {
      code: 'CW',
      name: 'Curaçao'
    }, {
      code: 'CY',
      name: 'Cyprus'
    }, {
      code: 'CZ',
      name: 'Czech Republic'
    }, {
      code: 'CI',
      name: "Côte D'Ivoire"
    }, {
      code: 'DK',
      name: 'Denmark'
    }, {
      code: 'DJ',
      name: 'Djibouti'
    }, {
      code: 'DM',
      name: 'Dominica'
    }, {
      code: 'DO',
      name: 'Dominican Republic'
    }, {
      code: 'TL',
      name: 'East Timor'
    }, {
      code: 'EC',
      name: 'Ecuador'
    }, {
      code: 'EG',
      name: 'Egypt'
    }, {
      code: 'SV',
      name: 'El Salvador'
    }, {
      code: 'GQ',
      name: 'Equatorial Guinea'
    }, {
      code: 'ER',
      name: 'Eritrea'
    }, {
      code: 'EE',
      name: 'Estonia'
    }, {
      code: 'ET',
      name: 'Ethiopia'
    }, {
      code: 'FK',
      name: 'Falkland Islands'
    }, {
      code: 'FO',
      name: 'Faroe Islands'
    }, {
      code: 'FJ',
      name: 'Fiji'
    }, {
      code: 'FI',
      name: 'Finland'
    }, {
      code: 'FR',
      name: 'France'
    }, {
      code: 'GF',
      name: 'French Guiana'
    }, {
      code: 'PF',
      name: 'French Polynesia'
    }, {
      code: 'TF',
      name: 'French Southern Territories'
    }, {
      code: 'GA',
      name: 'Gabon'
    }, {
      code: 'GM',
      name: 'Gambia'
    }, {
      code: 'GE',
      name: 'Georgia'
    }, {
      code: 'DE',
      name: 'Germany'
    }, {
      code: 'GH',
      name: 'Ghana'
    }, {
      code: 'GI',
      name: 'Gibraltar'
    }, {
      code: 'GR',
      name: 'Greece'
    }, {
      code: 'GL',
      name: 'Greenland'
    }, {
      code: 'GD',
      name: 'Grenada'
    }, {
      code: 'GP',
      name: 'Guadeloupe'
    }, {
      code: 'GU',
      name: 'Guam'
    }, {
      code: 'GT',
      name: 'Guatemala'
    }, {
      code: 'GG',
      name: 'Guernsey and Alderney'
    }, {
      code: 'GN',
      name: 'Guinea'
    }, {
      code: 'GW',
      name: 'Guinea-Bissau'
    }, {
      code: 'GY',
      name: 'Guyana'
    }, {
      code: 'HT',
      name: 'Haiti'
    }, {
      code: 'HM',
      name: 'Heard and McDonald Islands'
    }, {
      code: 'HN',
      name: 'Honduras'
    }, {
      code: 'HK',
      name: 'Hong Kong'
    }, {
      code: 'HU',
      name: 'Hungary'
    }, {
      code: 'IS',
      name: 'Iceland'
    }, {
      code: 'IN',
      name: 'India'
    }, {
      code: 'ID',
      name: 'Indonesia'
    }, {
      code: 'IR',
      name: 'Iran'
    }, {
      code: 'IQ',
      name: 'Iraq'
    }, {
      code: 'IE',
      name: 'Ireland'
    }, {
      code: 'IM',
      name: 'Isle of Man'
    }, {
      code: 'IL',
      name: 'Israel'
    }, {
      code: 'IT',
      name: 'Italy'
    }, {
      code: 'JM',
      name: 'Jamaica'
    }, {
      code: 'JP',
      name: 'Japan'
    }, {
      code: 'JE',
      name: 'Jersey'
    }, {
      code: 'JO',
      name: 'Jordan'
    }, {
      code: 'KZ',
      name: 'Kazakhstan'
    }, {
      code: 'KE',
      name: 'Kenya'
    }, {
      code: 'KI',
      name: 'Kiribati'
    }, {
      code: 'KP',
      name: 'Korea (North)'
    }, {
      code: 'KR',
      name: 'Korea (South)'
    }, {
      code: 'KW',
      name: 'Kuwait'
    }, {
      code: 'KG',
      name: 'Kyrgyzstan'
    }, {
      code: 'LA',
      name: 'Laos'
    }, {
      code: 'LV',
      name: 'Latvia'
    }, {
      code: 'LB',
      name: 'Lebanon'
    }, {
      code: 'LS',
      name: 'Lesotho'
    }, {
      code: 'LR',
      name: 'Liberia'
    }, {
      code: 'LY',
      name: 'Libya'
    }, {
      code: 'LI',
      name: 'Liechtenstein'
    }, {
      code: 'LT',
      name: 'Lithuania'
    }, {
      code: 'LU',
      name: 'Luxembourg'
    }, {
      code: 'MO',
      name: 'Macao'
    }, {
      code: 'MK',
      name: 'Macedonia'
    }, {
      code: 'MG',
      name: 'Madagascar'
    }, {
      code: 'MW',
      name: 'Malawi'
    }, {
      code: 'MY',
      name: 'Malaysia'
    }, {
      code: 'MV',
      name: 'Maldives'
    }, {
      code: 'ML',
      name: 'Mali'
    }, {
      code: 'MT',
      name: 'Malta'
    }, {
      code: 'MH',
      name: 'Marshall Islands'
    }, {
      code: 'MQ',
      name: 'Martinique'
    }, {
      code: 'MR',
      name: 'Mauritania'
    }, {
      code: 'MU',
      name: 'Mauritius'
    }, {
      code: 'YT',
      name: 'Mayotte'
    }, {
      code: 'MX',
      name: 'Mexico'
    }, {
      code: 'FM',
      name: 'Micronesia'
    }, {
      code: 'MD',
      name: 'Moldova'
    }, {
      code: 'MC',
      name: 'Monaco'
    }, {
      code: 'MN',
      name: 'Mongolia'
    }, {
      code: 'MS',
      name: 'Montserrat'
    }, {
      code: 'MA',
      name: 'Morocco'
    }, {
      code: 'MZ',
      name: 'Mozambique'
    }, {
      code: 'MM',
      name: 'Myanmar'
    }, {
      code: 'NA',
      name: 'Namibia'
    }, {
      code: 'NR',
      name: 'Nauru'
    }, {
      code: 'NP',
      name: 'Nepal'
    }, {
      code: 'NL',
      name: 'Netherlands'
    }, {
      code: 'AN',
      name: 'Netherlands Antilles'
    }, {
      code: 'NC',
      name: 'New Caledonia'
    }, {
      code: 'NZ',
      name: 'New Zealand'
    }, {
      code: 'NI',
      name: 'Nicaragua'
    }, {
      code: 'NE',
      name: 'Niger'
    }, {
      code: 'NG',
      name: 'Nigeria'
    }, {
      code: 'NU',
      name: 'Niue'
    }, {
      code: 'NF',
      name: 'Norfolk Island'
    }, {
      code: 'MP',
      name: 'Northern Mariana Islands'
    }, {
      code: 'NO',
      name: 'Norway'
    }, {
      code: 'OM',
      name: 'Oman'
    }, {
      code: 'PK',
      name: 'Pakistan'
    }, {
      code: 'PW',
      name: 'Palau'
    }, {
      code: 'PS',
      name: 'Palestine'
    }, {
      code: 'PA',
      name: 'Panama'
    }, {
      code: 'PG',
      name: 'Papua New Guinea'
    }, {
      code: 'PY',
      name: 'Paraguay'
    }, {
      code: 'PE',
      name: 'Peru'
    }, {
      code: 'PH',
      name: 'Philippines'
    }, {
      code: 'PN',
      name: 'Pitcairn'
    }, {
      code: 'PL',
      name: 'Poland'
    }, {
      code: 'PT',
      name: 'Portugal'
    }, {
      code: 'PR',
      name: 'Puerto Rico'
    }, {
      code: 'QA',
      name: 'Qatar'
    }, {
      code: 'RO',
      name: 'Romania'
    }, {
      code: 'RU',
      name: 'Russia'
    }, {
      code: 'RW',
      name: 'Rwanda'
    }, {
      code: 'RE',
      name: 'Réunion'
    }, {
      code: 'BL',
      name: 'Saint Barthélemy'
    }, {
      code: 'SH',
      name: 'Saint Helena'
    }, {
      code: 'KN',
      name: 'Saint Kitts and Nevis'
    }, {
      code: 'LC',
      name: 'Saint Lucia'
    }, {
      code: 'MF',
      name: 'Saint Martin'
    }, {
      code: 'PM',
      name: 'Saint Pierre and Miquelon'
    }, {
      code: 'VC',
      name: 'Saint Vincent and the Grenadines'
    }, {
      code: 'WS',
      name: 'Samoa'
    }, {
      code: 'SM',
      name: 'San Marino'
    }, {
      code: 'SA',
      name: 'Saudi Arabia'
    }, {
      code: 'SN',
      name: 'Senegal'
    }, {
      code: 'RS',
      name: 'Serbia'
    }, {
      code: 'SC',
      name: 'Seychelles'
    }, {
      code: 'SL',
      name: 'Sierra Leone'
    }, {
      code: 'SG',
      name: 'Singapore'
    }, {
      code: 'SX',
      name: 'Sint Maarten'
    }, {
      code: 'SK',
      name: 'Slovakia'
    }, {
      code: 'SI',
      name: 'Slovenia'
    }, {
      code: 'SB',
      name: 'Solomon Islands'
    }, {
      code: 'SO',
      name: 'Somalia'
    }, {
      code: 'ZA',
      name: 'South Africa'
    }, {
      code: 'GS',
      name: 'South Georgia and the South Sandwich Islands'
    }, {
      code: 'SS',
      name: 'South Sudan'
    }, {
      code: 'ES',
      name: 'Spain'
    }, {
      code: 'LK',
      name: 'Sri Lanka'
    }, {
      code: 'SD',
      name: 'Sudan'
    }, {
      code: 'SR',
      name: 'Suriname'
    }, {
      code: 'SJ',
      name: 'Svalbard and Jan Mayen'
    }, {
      code: 'SZ',
      name: 'Swaziland'
    }, {
      code: 'SE',
      name: 'Sweden'
    }, {
      code: 'CH',
      name: 'Switzerland'
    }, {
      code: 'SY',
      name: 'Syria'
    }, {
      code: 'ST',
      name: 'São Tomé and Príncipe'
    }, {
      code: 'TW',
      name: 'Taiwan'
    }, {
      code: 'TJ',
      name: 'Tajikistan'
    }, {
      code: 'TZ',
      name: 'Tanzania'
    }, {
      code: 'TH',
      name: 'Thailand'
    }, {
      code: 'TG',
      name: 'Togo'
    }, {
      code: 'TK',
      name: 'Tokelau'
    }, {
      code: 'TO',
      name: 'Tonga'
    }, {
      code: 'TT',
      name: 'Trinidad and Tobago'
    }, {
      code: 'TN',
      name: 'Tunisia'
    }, {
      code: 'TR',
      name: 'Turkey'
    }, {
      code: 'TM',
      name: 'Turkmenistan'
    }, {
      code: 'TC',
      name: 'Turks and Caicos Islands'
    }, {
      code: 'TV',
      name: 'Tuvalu'
    }, {
      code: 'UG',
      name: 'Uganda'
    }, {
      code: 'UA',
      name: 'Ukraine'
    }, {
      code: 'AE',
      name: 'United Arab Emirates'
    }, {
      code: 'GB',
      name: 'United Kingdom'
    }, {
      code: 'UM',
      name: 'United States Minor Outlying Islands'
    }, {
      code: 'US',
      name: 'United States of America'
    }, {
      code: 'UY',
      name: 'Uruguay'
    }, {
      code: 'UZ',
      name: 'Uzbekistan'
    }, {
      code: 'VU',
      name: 'Vanuatu'
    }, {
      code: 'VA',
      name: 'Vatican City'
    }, {
      code: 'VE',
      name: 'Venezuela'
    }, {
      code: 'VN',
      name: 'Vietnam'
    }, {
      code: 'VI',
      name: 'Virgin Islands of the United States'
    }, {
      code: 'WF',
      name: 'Wallis and Futuna'
    }, {
      code: 'EH',
      name: 'Western Sahara'
    }, {
      code: 'YE',
      name: 'Yemen'
    }, {
      code: 'ZM',
      name: 'Zambia'
    }, {
      code: 'ZW',
      name: 'Zimbabwe'
    }, {
      code: 'AX',
      name: 'Åland Islands'
    }
  ];

}
