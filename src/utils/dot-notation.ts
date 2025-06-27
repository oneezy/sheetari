type JsonObject = Record<string, unknown>;

export function parseDotNotation(data: JsonObject): JsonObject {
  const result: JsonObject = {};

  for (const key in data) {
    let current: JsonObject = result;
    const parts = key.split('.');
    const lastPart = parts.pop();
    if (!lastPart) continue;

    for (const part of parts) {
      current[part] = current[part] || {};
      current = current[part] as JsonObject;
    }

    current[lastPart] = data[key];
  }

  return result;
}
