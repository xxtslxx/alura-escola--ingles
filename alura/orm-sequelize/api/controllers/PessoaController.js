const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try {
          const todasAsPessoas = await database.Pessoas.findAll()
          return res.status(200).json(todasAsPessoas)
        } catch(error) {
          return res.status(500).json(error.message)
    }
}

static async pegaUmaPessoa(req, res) {
    const { id } = req.params
      try {
        const umaPessoa = await database.Pessoas.findOne( { 
          where: {
            id:Number(id)
           }
          })
        return res.status(200).json(umaPessoa)
      } catch (error) {
        return res.status(500).json(error.message)
  }
}

static async criaPessoa(req, res) {
   const novaPessoa = req.body
      try {
        const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
        return res.status(201).json(novaPessoaCriada)
      } catch (error) {
        return res.status(500).json(error.mensage)
      }
  }

static async atualizaPessoa(req, res) {
  const { id } = req.params
     const novasInfos = req.body
       try {
           await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
           const pessoaAtualiada = await database.Pessoas.findOne( { where: {
           id: Number(id) }})
           return res.status(200).json(pessoaAtualiada)
         } catch (error) {
           return res.status(500).json(error.mensage)
         }  

  }


static async apagaPessoa(req, res) {
  const { id } = req.params
  try {
    await database.Pessoas.destroy({ where: { id: Number(id) }})
    return res.status(200).json({ mensagem: `id ${id} excluido` })
  
  } catch (error) {
    return res.status(500).json(error.mensage)
  }
}


}
module.exports = PessoaController