const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use('/assets',express.static('assets'));

app.get('/', (req, res) => {
  const produk = [
    {
      brand: 'bolt',
      namaProduk: 'bolt ikan',
      harga: '18500',
    },
  ];

  res.render('landing-page', {
    produk,
  });
});


app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.listen(1997, () => {
  console.log('Server Menyalaa');
});
