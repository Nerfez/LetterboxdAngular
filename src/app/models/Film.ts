export class Film {
  //Déclaration de mes variables
  id!: number;
  title!: string;
  real!: string;
  description!: string;
  createdDate!: Date;
  stars!: number;
  imageUrl!: string;
  buttonText!: string;
  price!: number;
  location?: string;
  favorite?: boolean;
}
