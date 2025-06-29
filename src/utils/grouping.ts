export function parseGroupedData(data: Record<string, string | null>, groupMode: 'dot' | 'case' | 'none'): Record<string, unknown> {
  if (groupMode === 'dot') {
    return parseDotNotation(data);
  } else if (groupMode === 'case') {
    return parseCaseGrouping(data);
  } else {
    return data; // none - return flat structure
  }
}

export function parseDotNotation(obj: Record<string, string | null>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const keys = key.split('.');
    let current: Record<string, unknown> = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k] as Record<string, unknown>;
    }
    
    current[keys[keys.length - 1]] = value;
  }
  
  return result;
}

export function parseCaseGrouping(obj: Record<string, string | null>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  let currentGroup: string | null = null;
  
  for (const [key, value] of Object.entries(obj)) {
    // Check if this is a group header (all uppercase, length > 1)
    const isGroupHeader = key.toUpperCase() === key && key.length > 1;
    
    if (isGroupHeader) {
      // This is a group header, start a new group
      currentGroup = key.toLowerCase();
      result[currentGroup] = {};
      // Note: group header data (like "0 / 3") is intentionally not included in output
    } else if (currentGroup) {
      // This is data belonging to the current group
      const groupObj = result[currentGroup] as Record<string, unknown>;
      groupObj[key] = value;
    } else {
      // No group context, add to root
      result[key] = value;
    }
  }
  
  return result;
}

export function parseRowGrouping(rows: string[][], headerData: string[], groupMode: 'dot' | 'case' | 'none'): Record<string, unknown>[] {
  if (groupMode !== 'case') {
    // For non-case grouping, process each row normally
    return rows.map(row => {
      const rowData = headerData.reduce((acc, key, i) => {
        acc[key] = row[i] || null;
        return acc;
      }, {} as Record<string, string | null>);
      
      if (groupMode === 'dot') {
        return parseDotNotation(rowData);
      } else {
        return rowData;
      }
    });
  }
  
  // Case-based grouping for rows
  // First, analyze headers to find group structure
  const groupStructure = analyzeRowGroups(headerData);
  
  // Get all group header indices to exclude them
  const groupHeaderIndices = new Set(groupStructure.map(g => g.groupHeaderIndex).filter(idx => idx !== undefined));
  
  return rows.map(row => {
    const result: Record<string, unknown> = {};
    
    for (const group of groupStructure) {
      if (group.isGroup) {
        // This is a group - collect data from its columns (excluding group header column)
        const groupData: Record<string, string | null> = {};
        for (const colIndex of group.dataColumns) {
          // Skip if this is a group header column
          if (!groupHeaderIndices.has(colIndex)) {
            const colName = headerData[colIndex];
            groupData[colName] = row[colIndex] || null;
          }
        }
        result[group.name.toLowerCase()] = groupData;
      }
      // Note: group header columns are intentionally skipped - they contain meta info like "0 / 3"
    }
    
    return result;
  });
}

function analyzeRowGroups(headers: string[]): Array<{name: string, isGroup: boolean, dataColumns: number[], groupHeaderIndex?: number}> {
  const groups: Array<{name: string, isGroup: boolean, dataColumns: number[], groupHeaderIndex?: number}> = [];
  let currentGroup: {name: string, isGroup: boolean, dataColumns: number[], groupHeaderIndex?: number} | null = null;
  
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    const isGroupHeader = header.toUpperCase() === header && header.length > 1;
    
    if (isGroupHeader) {
      // Save previous group if exists
      if (currentGroup) {
        groups.push(currentGroup);
      }
      
      // Start new group
      currentGroup = {
        name: header,
        isGroup: true,
        dataColumns: [],
        groupHeaderIndex: i
      };
    } else if (currentGroup) {
      // Add this column to the current group
      currentGroup.dataColumns.push(i);
    }
  }
  
  // Add the last group
  if (currentGroup) {
    groups.push(currentGroup);
  }
  
  return groups;
}
