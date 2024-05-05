const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/mahasiswa', (req, res) => {
    const nim = req.body.nim;
    const nama = req.body.nama;

    const msg= {    status:"sukses",
                    data:{"nim" : nim, "nama" : nama}};
    res.send(msg);
});

app.get('/', (req, res) => {
    res.send(`Hello Express Backend`)
});

app.get('/mahasiswa', (rea, res) => {
    res.json(mahasiswa)
});

app.get('/get-mahasiswa-by-nim', (req, res) => {
    const nim = req.query.nim;

    res.send(`Mahasiswa dengan nim : ${nim} ditemukan`)
});

app.get('/nilai-persemester', (req, res) => {
    const nim = req.query.nim;
    const semester = req.query.semester;

    res.send(`nilai mahasiswa nim: ${nim} semester ${semester}`)
});

app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim;

    res.send(`Mahasiswa dengan nim : ${nim} ditemukan`)
});

app.get('/nilai/:nim/:semester', (req, res) => {
    const nim = req.params.nim;
    const semester = req.params.semester;

    res.send(`Nilai mahasiswa nim : ${nim} semester ${semester}`)
});

app.post('/', (req, res) => {
    res.send(`Post data`)
});

app.put('/', (req, res) => {
    res.send(`Update data sukses`)
});

app.delete('/', (req, res) => {
    res.send(`Hapus data berhasil`)
})

app.listen(port, () => {
    console.log(`server berjalan pada localhost:${port}`);
});