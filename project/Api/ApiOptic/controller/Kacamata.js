const kacamata = require('../model/Kacamata')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataKacamata = (data, gambar) =>
    new Promise(async (resolv, reject)=> {

        const kacamataBaru = new kacamata({
            kodeKacamata : data.kodeKacamata,
            merkKacamata : data.merkKacamata,
            typeLensa : data.typeLensa,
            jenisFrame : data.jenisFrame,
            warnaFrame : data.warnaFrame,
            hargaKacamata : data.hargaKacamata,
            gambar : gambar
        })
    await kacamata.findOne({kodeKacamata: data.kodeKacamata})
    .then(kacamata => {
        if (kacamata) {
            reject(response.commonErrorMsg('kode kacamata sudah digunakan'))
        } else {
            kacamataBaru.save()
                .then(r=> {
                    resolve(response.commonSucsessMsg('berhasil menginput data kacamata'))
                }).catch(err => {
                    reject(respons.commonErrorMsg('mohon maaf input kacamata gagal'))
            })
        }
    }).catch(err => {
        reject(respons.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
})

    })

exports.lihatDataKacamata = () =>
    new Promise(async (resolve, reject) => {
        await kacamata.find({})
            .then(result => {
            resolve(response.commonResult(result))
    })
        .catch(()=>reject(response.commonErrorMsg('mohon maaf server kami sedang down')))
})

exports.lihatDetailDataKacamata = (kodeKacamata) =>
    new Promise(async (resolve, reject) => {
        await kacamata.findOne({kodeKacamata: kodeKacamata})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('mohon maaf server kami sedang down')))
    })

exports.updateKacamata = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
        kacamata.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodeKacamata : data.kodeKacamata,
                    merkKacamata : data.merkKacamata,
                    typeLensa : data.typeLensa,
                    jenisFrame : data.jenisFrame,
                    warnaFrame : data.warnaFrame,
                    hargaKacamata : data.hargaKacamata,
                    gambar : gambar

                }
            }
        ).then(kacamata => {
            resolve(response.commonSucsessMsg('Berhasil Mengubah Data'))
        }).catch(err => {
            reject(response.commonErrorMsg('mohon maaf server kami sedang down'))
        })
    })

exports.hapuskacamata = (_id) =>
    new Promise(async (resolve, reject)=>{
        await kacamata.remove({_id: ObjectId(_id)})
            .then(()=>{
                resolve(response.commonSucsessMsg('Berhasil Menghapus Data'))
            }).catch(() => {
                reject(response.commonErrorMsg('mohon maaf server kami sedang down'))
            })
    })