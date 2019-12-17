const { connect } = require('../models/Repository')
const { voluntariosModel } = require('../models/VoluntariosSchema')

connect()

const getAll = (request, response) => {
  voluntariosModel.find((error, voluntarios) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(voluntarios)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return voluntariosModel.findById(id, (error, voluntario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (voluntario) {
      return response.status(200).send(voluntario)
    }

    return response.status(404).send('Voluntário não encontrado.')
  })
}

const add = (request, response) => {
  const novoVoluntario = new voluntariosModel(request.body)

  novoVoluntario.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoVoluntario)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  voluntariosModel.findByIdAndDelete(id, (error, voluntario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (voluntario) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Voluntário não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const voluntarioUpdate = request.body
  const options = { new: true }

  voluntariosModel.findByIdAndUpdate(
    id,
    voluntarioUpdate,
    options,
    (error, voluntario) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (voluntario) {
        return response.status(200).send(voluntario)
      }

      return response.status(404).send('Voluntário não encontrado.')
    }
  )
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}
