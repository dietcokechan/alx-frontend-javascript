export default function guardrail(mathFunction) {
  const q = [];

  try {
    q.push(mathFunction());
  } catch (error) {
    q.push(error.toString());
  } finally {
    q.push('Guardrail was processed');
  }

  return q;
}
