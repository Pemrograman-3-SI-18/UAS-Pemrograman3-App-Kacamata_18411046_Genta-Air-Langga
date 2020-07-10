const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

        kodeKacamata: {
            type: String
         },
        merkKacamata: {
            type: String
         },
        typeLensa: {
             type: String
         },
        jenisFrame: {
                type: String
        },
        warnaFrame: {
                 type: String
        },
        hargaKacamata: {
                 type: String
        },
          gambar: {
            type: String
        }

})

module.exports = mongoose.model('kacamata', userSchema)