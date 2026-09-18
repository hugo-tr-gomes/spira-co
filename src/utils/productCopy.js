export function getProductCopy(product, t) {
  return {
    name: t(`products.${product.id}.name`),
    desc: t(`products.${product.id}.desc`),
    form: t(`products.${product.id}.form`)
  };
}
