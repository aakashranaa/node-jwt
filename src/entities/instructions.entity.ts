import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "Instructions", synchronize: true})
export class Instructions {
    @Column("number")
    @PrimaryColumn()
    ExperimentId: number;

    @Column("varchar")
    StepNumber

    @Column("varchar")
    Image

    @Column("varchar")
    Description
}
