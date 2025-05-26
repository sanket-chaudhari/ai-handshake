function validatePayloadShape(payload) {
  const errors = [];

  if (!Array.isArray(payload.files)) {
    errors.push('Payload must include an array at `files`.');
    return errors;
  }

  payload.files.forEach((file, idx) => {
    if (!file.path || typeof file.path !== 'string') {
      errors.push(`File at index ${idx} is missing a valid 'path'.`);
    }
    if (typeof file.content !== 'string') {
      errors.push(`File at index ${idx} is missing valid 'content'.`);
    }
  });

  return errors;
}

module.exports = { validatePayloadShape };