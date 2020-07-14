import User from '../models/User';

export default interface ICreateUserDTO extends Omit<User, 'id'> {
}
