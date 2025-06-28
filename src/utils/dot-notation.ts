type JsonObject = Record<string, unknown>;

export function parseDotNotation(data: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in data) {
    let current = result;
    const parts = key.split('.');
    const lastPart = parts.pop();

    if (!lastPart) continue;

    for (const part of parts) {
      if (!current[part] || typeof current[part] !== 'object') {
        current[part] = {};
      }
      current = current[part];
    }

    let value = data[key];
    if (value === 'TRUE') {
      value = true;
    } else if (value === 'FALSE') {
      value = false;
    }

    current[lastPart] = value;
  }

  return result;
}
