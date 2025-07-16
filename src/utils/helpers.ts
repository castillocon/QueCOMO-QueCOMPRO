export const parseQuantity = (quantityStr: string): { value: number | null; unit: string } => {
  const match = quantityStr.match(/^(\d+(\.\d+)?)\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)?$/);
  if (match) {
    const value = parseFloat(match[1]);
    const unit = match[3] ? match[3].trim().toLowerCase() : '';
    return { value, unit };
  }
  return { value: null, unit: quantityStr.trim().toLowerCase() };
};