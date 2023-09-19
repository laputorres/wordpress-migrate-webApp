import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  formatData(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const binaryString: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName: string = workbook.SheetNames[0];
      const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
      const data: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      // Aquí puedes formatear los datos según tus necesidades

      return data;
    };

    reader.readAsBinaryString(file);
  }
}
