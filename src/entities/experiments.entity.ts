import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "Experiment", synchronize: true})
export class Experiment {
    @Column("number")
    @PrimaryColumn()
    ExperimentId: number;

    @Column("varchar")
    Name;

    @Column("varchar")
    Description;

    @Column("varchar")
    Level;

    @Column("varchar")
    Subject;

    @Column("varchar")
    MainImage;

    @Column("varchar")
    MaterialsList;

    @Column("varchar")
    SafetyPrecautions;

    @Column("varchar")
    StepByStepInstructions;
}
