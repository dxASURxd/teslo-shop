import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from ".";

@Entity()
export class ProductIMage{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    // muhas imagenes tienen un solo producto
    @ManyToOne(
        () => Product,
        (product) => product.images
    )
    product: Product;

}