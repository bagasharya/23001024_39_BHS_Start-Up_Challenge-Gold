const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'))

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

app.listen(1997, () => {
  console.log('Server Menyalaa');
});
