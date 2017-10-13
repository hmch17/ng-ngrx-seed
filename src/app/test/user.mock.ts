import { random, name } from 'faker';
import { User } from '../store/models/user';

export const mockUser: User = {
    id: random.uuid(),
    name: name.findName()
};
