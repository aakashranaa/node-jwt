import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "categories", synchronize: false})
export class Categories {
    @Column("number")
    @PrimaryColumn()
    CategoryId: number;

    @Column("varchar")
    CategoryName: string;

    @Column("varchar")
    Description: string;
}
