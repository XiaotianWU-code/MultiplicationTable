export class MultiplicationTable {
  public render(start: number, end: number): string {
    // if (this.isStartLessThanEnd(start, end)) {
    //   return ''
    // }

    // if (!this.isValidRange(start, end)) {
    //   return ''
    // }

    if (!this.isValid(start, end)){
      return ''
    }

    return this.getMultiplicationTable(start, end)
  }

  public isValid(start: number, end: number){
    if (!this.isStartLessThanEnd(start, end) && this.isValidRange(start, end)){
      return true
    }else {
      return false
    }
  }

  private isStartLessThanEnd(start: number, end: number): boolean {
    return start > end
  }

  private isValidRange(start: number, end: number): boolean {
    return start >= 1 && end < 10
  }

  public getMultiplicationTable(start: number, end: number) {
    let multiplicationTable = ''
    for (let coulmn = start; coulmn <= end; coulmn++) {
      for (let row = start; row <= coulmn; row++) {
        const tmp = row + '*' + coulmn + '=' + row * coulmn
        multiplicationTable = multiplicationTable + tmp
        if (row !== coulmn) {
          multiplicationTable = multiplicationTable + '  '
        }
        if (row === coulmn && row !== end) {
          multiplicationTable = multiplicationTable + '\n'
        }
      }
    }
    return multiplicationTable
  }
}
