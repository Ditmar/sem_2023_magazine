export interface socialFollow {
  title: string;
  icon: string | null;
  link: string;
}
export interface resourcesFollow {
  title: string;
  items: Array<{ name: string; link: string }>;
}
