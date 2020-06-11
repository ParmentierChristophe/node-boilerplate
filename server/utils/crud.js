export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.findAll();
    return res.status(200).json({ data: docs });
  } catch (error) {
    res.status(400).end();
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

export const crudControllers = (model, a = null) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model, a),
  createOne: createOne(model),
});
