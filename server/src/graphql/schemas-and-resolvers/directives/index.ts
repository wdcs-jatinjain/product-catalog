export const customDirectives = (schema: any) => {
    const directiveTransformers: any[] = [];
    return directiveTransformers.reduce((curSchema, transformer) => transformer(curSchema), schema);
  };