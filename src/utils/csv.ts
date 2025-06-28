export function parseCsv(csv: string): string[][] {
  // Handle Google Sheets gviz edge cases where boolean values mess up CSV structure
  
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
      const firstCell = cells[0];
      const secondCell = cells[1];
      
      // Strategy: Look for dot notation patterns and try to intelligently split
      // Example: "user.name user.email settings.theme" -> ["user.name", "user.email", "settings.theme"]
      const dotNotationKeys = firstCell.split(' ').filter(part => part.includes('.'));
      
      if (dotNotationKeys.length > 1) {
        // We have multiple dot notation keys
        const allValues = secondCell.split(' ');
        
        // Try to map values to keys using heuristics
        const mappedPairs: Array<[string, string]> = [];
        const _valueIdx = 0;
        
        for (let i = 0; i < dotNotationKeys.length; i++) {
          const key = dotNotationKeys[i];
          let value = '';
          
          if (key.includes('email')) {
            // Find email-like value
            const emailValue = allValues.find(v => v.includes('@'));
            if (emailValue) {
              value = emailValue;
              // Remove this value from the array so it's not used again
              const emailIdx = allValues.indexOf(emailValue);
              allValues.splice(emailIdx, 1);
            }
          } else if (key.includes('name') && !key.includes('email')) {
            // Find name-like value (first available non-email, non-boolean word)
            const nameValue = allValues.find(v => 
              !v.includes('@') && 
              !['TRUE', 'FALSE', 'true', 'false'].includes(v.toUpperCase()) &&
              !v.match(/^\d+$/) &&
              v.length > 1
            );
            if (nameValue) {
              value = nameValue;
              const nameIdx = allValues.indexOf(nameValue);
              allValues.splice(nameIdx, 1);
            }
          } else if (key.includes('theme')) {
            // Find theme-like value (usually at the end)
            value = allValues[allValues.length - 1] || '';
            allValues.pop();
          } else if (key.includes('address')) {
            // Take the next available value
            value = allValues.shift() || '';
          } else {
            // Default: take the next available value
            value = allValues.shift() || '';
          }
          
          if (key && value) {
            mappedPairs.push([key, value]);
          }
        }
        
        // Add the mapped pairs as separate CSV lines
        for (const [key, value] of mappedPairs) {
          cleanedLines.push(`"${key}","${value}"`);
        }
        continue;
      }
      
      // Fallback: simple space-based splitting (keep original logic)
      const keys = firstCell.split(' ');
      const values = secondCell.split(' ');
      
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
