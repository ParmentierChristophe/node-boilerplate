import { paginate } from './pagination';
import moment from 'moment';
import { Op } from 'sequelize';

export const getMany = (model) => async (req, res) => {
  try {
    // get the query params
    const { q, page, limit, order_by, order_direction } = req.query;

    let search = {};
    let order = [];

    // add the search term to the search object
    if (q) {
      search = {
        where: {
          name: {
            [Op.like]: `%${q}%`,
          },
        },
      };
    }

    // add the order parameters to the order
    if (order_by && order_direction) {
      order.push([order_by, order_direction]);
    }

    // transform function that can be passed to the  paginate method
    const transform = (records) => {
      return records.map((record) => {
        return {
          id: record.id,
          name: record.name,
          date: moment(record.createdAt).format('D-M-Y H:mm A'),
        };
      });
    };

    // paginate method that takes in the model, page, limit, search object, order and transform
    const datas = await paginate(model, page, limit, search, order, transform);

    return res.status(200).json({
      success: true,
      message: `Fetched ${model.name}`,
      data: datas,
    });
  } catch (error) {
    console.log(`Failed to fetch ${model.name}`, error);
    return res.status(500).send({
      success: false,
      message: `Failed to fetch ${model.name}`,
    });
  }
};

export const getOne = (model, relationModel = null) => async (req, res) => {
  try {
    const docId = req.params.id;
    let doc;

    if (relationModel) {
      doc = await model.findOne({
        where: { id: docId },
        include: {
          model: relationModel,
        },
      });
    } else {
      doc = await model.findOne({
        where: { id: docId },
      });
    }
    if (!doc) {
      return res.status(404).json(errorHandling(`${model} with the specified ID does not exists`));
    }
    return res.status(200).json({ data: doc });
  } catch (error) {
    console.log(error);

    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create(req.body);

    return res.status(201).json({ data: doc });
  } catch (error) {
    res.status(400).end();
  }
};

export const removeOne = (model) => async (req, res) => {
  try {
    const docId = req.params.id;
    const deleted = await model.destroy({
      where: { id: docId },
    });
    if (deleted) {
      return res.status(204).send(`${model} deleted`);
    }
    throw new Error(`${model} not found`);
  } catch (error) {
    res.status(400).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const docId = req.params.id;
    const [updated] = await model.update(req.body, {
      where: { id: docId },
    });
    if (updated) {
      const updatedDoc = await model.findOne({ where: { id: docId } });
      return res.status(200).json({ data: updatedDoc });
    }
    throw new Error(`${model} not found`);
  } catch (error) {
    res.status(400).end();
  }
};

export const crudControllers = (model, relationModel = null) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model, relationModel),
  createOne: createOne(model),
});
