declare module "*.module.css" {
  export const styles: { [p: string]: string };
}

declare module "*.module.scss" {
  export const styles: { [key: string]: string };
}
