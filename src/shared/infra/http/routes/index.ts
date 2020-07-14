import express from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';

const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;
