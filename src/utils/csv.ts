export function parseCsv(csv: string): string[][] {
  // Handle Google Sheets gviz edge cases where boolean values mess up CSV structure
  let cleanedCsv = csv;
  
  // Check for malformed rows where multiple values are merged into single cells
  // This happens when Google Sheets encounters TRUE/FALSE values
  const lines = csv.split('\n');
  const cleanedLines: string[] = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    // Parse the line properly, handling quoted values
    const cells = parseCSVLine(line);
    
    // Check if we have a malformed row (too few cells but content suggests more)
    if (cells.length === 2 && cells[0].includes(' ') && cells[1].includes(' ')) {
      // This might be a malformed row where multiple key-value pairs were merged
      // Try to split them back into proper format
      const keys = cells[0].split(' ');
      const values = cells[1].split(' ');
      
      // If we have multiple keys and values, split them into separate rows
      if (keys.length > 1 && values.length > 1 && keys.length === values.length) {
        for (let i = 0; i < keys.length; i++) {
          cleanedLines.push(`"${keys[i]}","${values[i]}"`);
        }
        continue;
      }
    }
    
    // Keep the original line if no issues detected
    cleanedLines.push(line);
  }
  
  // Parse the cleaned CSV
  return cleanedLines.map(line => parseCSVLine(line));
}

// Proper CSV line parser that handles quoted values correctly
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  
  while (i < line.length) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i += 2;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
        i++;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      result.push(current.trim());
      current = '';
      i++;
    } else {
      current += char;
      i++;
    }
  }
  
  // Add the last field
  result.push(current.trim());
  
  return result;
}
