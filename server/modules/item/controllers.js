import { crudControllers } from '../../utils/crud';
import models from '../../../database/models';

export default crudControllers(models.Item, models.List);
