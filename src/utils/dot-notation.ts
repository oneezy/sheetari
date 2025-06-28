type JsonObject = Record<string, unknown>;

export function parseDotNotation(data: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const key in data) {
    let current = result;
    const parts = key.split('.');
    const lastPart = parts.pop();

    if (!lastPart) continue;

    for (const part of parts) {
      if (!current[part] || typeof current[part] !== 'object') {
        current[part] = {};
      }
      current = current[part] as Record<string, unknown>;
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
