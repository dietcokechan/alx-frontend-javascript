export default function createIteratorObject(report) {
  const result = [];
  for (const dep of Object.values(report.allEmployees)) {
    result.push(...dep);
  }
  return result;
}
