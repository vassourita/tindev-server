import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
class User {
  @PrimaryColumn()
  public user: string;

  @Column()
  public name: string;

  @Column()
  public bio: string;

  @Column()
  public avatarUrl: string;
}

export default User;
