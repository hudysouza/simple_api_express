import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Pessoa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 200
  })
  firstName: string

  @Column({
    length: 200
  })
  lastName: string
}
