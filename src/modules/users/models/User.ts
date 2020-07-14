import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
class User {
  @PrimaryColumn()
  public email: string;

  @Column()
  public username: string;
}

export default User;
