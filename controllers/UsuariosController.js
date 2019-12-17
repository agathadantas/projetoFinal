const { connect } = require('../models/Repository')
const usuariosModel = require('../models/UsuariosSchema')
const { voluntariosModel } = require('../models/VoluntariosSchema')


connect()


const getAll = (request, response) => {
  usuariosModel.find((error, usuarios) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(usuarios)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return usuariosModel.findById(id, (error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (usuario) {
      return response.status(200).send(usuario)
    }

    return response.status(404).send('Usuário não encontrado.')
  })
}

const add = (request, response) => {
  const novoUsuario = new usuariosModel(request.body)

  novoUsuario.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoUsuario)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  usuariosModel.findByIdAndDelete(id, (error, usuario) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (usuario) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Usuário não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const usuarioUpdate = request.body
  const options = { new: true }

  usuariosModel.findByIdAndUpdate(
    id,
    usuarioUpdate,
    options,
    (error, usuario) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (usuario) {
        return response.status(200).send(usuario)
      }

      return response.status(404).send('Usuário não encontrado.')
    }
  )
}

const addVoluntario = async (request, response) => {
  const usuarioId = request.params.usuarioId
  const voluntario = request.body
  const options = { new: true }
  const novoVoluntario = new voluntarioModel(voluntario)
  const usuario = await usuariosModel.findById(usuarioId)

  usuario.voluntario.push(novoVoluntario)
  usuario.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(usuario)
  })
}


const updateVoluntario = async (request, response) => {
  const usuarioId = request.params.usuarioId
  //const voluntarioId = request.params.voluntarioId
  const voluntarioId = request.body.voluntario
  const options = { new: true }
 
  const voluntario = voluntariosModel.findById(
    voluntarioId,
    (error, voluntario) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (voluntario) {
        usuariosModel.findOneAndUpdate(
          { _id: usuarioId }, 
          { voluntarios : [voluntario]},
          options,
          (error, usuario) => {
            if (error) {
              return response.status(500).send(error)
            }

            if (usuario) {
              return response.status(200).send(usuario)
            }

            return response.status(404).send('Usuário não encontrado.')
          }
        )
        return response.status(200).send(voluntario)
      }

      return response.status(404).send('voluntário não encontrado.')
    }
  )
  console.log("voluntario")

  
}

const getVoluntarioById = async (request, response) => {
  const usuarioId = request.params.usuarioId
  const voluntarioId = request.params.voluntarioId
  const usuario = await usuariosModel.findById(usuarioId)
  const voluntario = usuario.voluntario.find(voluntario => voluntario._id == voluntarioId)

  return response.status(200).send(voluntario)
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  addVoluntario,
  updateVoluntario,
  getVoluntarioById
}
