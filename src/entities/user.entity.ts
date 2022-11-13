import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "Users", synchronize: true})
export class User {
    @Column("string")
    @PrimaryColumn()
    UserId: string;

    @Column("varchar")
    FirstName: string;

    @Column("varchar")
    LastName: string;

    @Column("varchar")
    Email: string;

    @Column("varchar")
    Password: string;

    @Column("varchar")
    Role: string;
}
