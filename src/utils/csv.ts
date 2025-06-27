export function parseCsv(csv: string): string[][] {
  return csv.split('\n').map(line => 
    line.split(',').map(cell => 
      cell.trim().replace(/^"|"$/g, '')
    )
  );
}
