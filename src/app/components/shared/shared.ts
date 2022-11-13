//
// ===== File globals.ts    
//
'use strict';

import { HttpHeaders } from "@angular/common/http";

export const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

export const headers2 = new HttpHeaders()
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

