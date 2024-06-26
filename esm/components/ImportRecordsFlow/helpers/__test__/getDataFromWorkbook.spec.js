import XLSX from 'xlsx';
import getDataFromWorkbook from '../getDataFromWorkbook';
import getWorkbookParams from './getWorkbookParams';
XLSX.utils.sheet_to_row_object_array = jest.fn();
describe('getDataFromWorkbook', function () {
  it('should call sheet_to_row_object_array with the right arguments', function () {
    var workbook = getWorkbookParams();
    getDataFromWorkbook(workbook);
    expect(XLSX.utils.sheet_to_row_object_array).toHaveBeenCalledWith(workbook.Sheets[workbook.SheetNames[0]]);
  });
});