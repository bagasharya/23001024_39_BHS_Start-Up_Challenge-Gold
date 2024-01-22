const { knex } = require('../dbConnection');

// DASHBOARD
const getDashboard = (req, res) => {
  res.render('dashboard')
}

// GET FOOD
const listProductsFood = async (req, res) => {
  const products = await knex
  .table('products_food')
  .select(['id', 'merk', 'varian', 'harga', 'desc'])
 
  
  res.render("produk-makanan", { products_food : products})

  // res.json({
  //   products_food: products,
  // })
};
//POST FOOD
const addProductFood = async (req, res) => {
  await knex.table('products_food').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  // res.json({
  //   message: 'produk berhasil di tambah',
  // });

  res.redirect("/products/food")

};
// UPDATE FOOD
const updateProductsFood = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_food').update({
    id: idInput,
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  // res.json({message: 'berhasil'})

  res.redirect("/products/food")

}
// DELETE FOOD
const deleteProductFood = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_food')
    .where({
      id: idInput,
    })
    .delete();

    res.redirect("/products/food")

  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL FOOD
const detailProductsFood = async (req, res) => {
  const idInput = req.params.id;

 const products_food =  await knex
    .table('products_food')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id: idInput
    })

  res.render("detail-produk-food", {products_food})

  // res.json({
  //   products_food: products,
  // })
};


// GET MEDIC
const listProductsMedic = async (req, res) => {
  const products = await knex
  .table('products_medic')
  .select(['id','merk', 'varian', 'harga', 'desc'])

  res.render("produk-obat", { products_medic : products})

  // res.json({
  //   products_food: products,
  // })
};
// POST MEDIC
const addProductMedic = async (req, res) => {
  await knex.table('products_medic').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.redirect("/products/medic")

  // res.json({
  //   message: 'produk berhasil di tambah',
  // });
};
// UPDATE MEDIC
const updateProductsMedic = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_medic').update({
    id: idInput,
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.redirect("/products/medic")

  // res.json({message: 'berhasil'})
}
// DELETE MEDIC
const deleteProductMedic = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_medic')
    .where({
      id: idInput,
    })
    .delete();

  res.redirect('/products/medic')

  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL MEDIC
const detailProductsMedic = async (req, res) => {
  const idInput = req.params.id;

 const products_medic =  await knex
    .table('products_medic')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id : idInput
    })

  res.render("detail-produk-medic", {products_medic})

  // res.json({
  //   products_food: products,
  // })
};


// GET VITAMIN
const listProductsVit = async (req, res) => {
  const products = await knex
  .table('products_vit')
  .select(['id','merk', 'varian', 'harga', 'desc'])

  res.render("produk-vit", { products_vit : products})
};
// POST VITAMIN
const addProductVit = async (req, res) => {
  await knex.table('products_vit').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.redirect('/products/vit')
  // res.json({
  //   message: 'produk berhasil di tambah',
  // });
};
// UPDATE VITAMIN
const updateProductsVit = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_vit').update({
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.redirect('/products/vit')
  // res.json({message: 'berhasil'})
}
// DELETE VITAMIN
const deleteProductVit = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_vit')
    .where({
      id: idInput,
    })
    .delete();

    res.redirect('/products/vit')
  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL VITAMIN
const detailProductsVit = async (req, res) => {
  const idInput = req.params.id;

 const products_vit =  await knex
    .table('products_vit')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id : idInput
    })

  res.render("detail-produk-vit", {products_vit})

  // res.json({
  //   products_food: products,
  // })
};


// GET GROOM
const listProductsGroom = async (req, res) => {
  const products = await knex
  .table('products_groom')
  .select(['id','merk', 'varian', 'harga', 'desc'])

  res.render("produk-groom", { products_groom : products})
};
// POST GROOM
const addProductGroom = async (req, res) => {
  await knex.table('products_groom').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.redirect('/products/groom')
  // res.json({
  //   message: 'produk berhasil di tambah',
  // });
};
// UPDATE GROOM
const updateProductsGroom = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_groom').update({
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.redirect('/products/groom')
  // res.json({message: 'berhasil'})
}
// DELETE GROOM
const deleteProductGroom = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_groom')
    .where({
      id: idInput,
    })
    .delete();

    res.redirect('/products/groom')
  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL GROOM
const detailProductsGroom = async (req, res) => {
  const idInput = req.params.id;

 const products_groom =  await knex
    .table('products_groom')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id : idInput
    })

  res.render("detail-produk-groom", {products_groom})

  // res.json({
  //   products_food: products,
  // })
};

// GET LITTER
const listProductsLitter = async (req, res) => {
  const products = await knex
  .table('products_litter')
  .select(['id','merk', 'varian', 'harga', 'desc'])

  res.render("produk-litter", { products_litter : products})
};
// POST LITTER
const addProductLitter = async (req, res) => {
  await knex.table('products_litter').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.redirect('/products/litter')

  // res.json({
  //   message: 'produk berhasil di tambah',
  // });
};
// UPDATE LITTER
const updateProductsLitter = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_litter').update({
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.redirect('/products/litter')
  // res.json({message: 'berhasil'})
}
// DELETE LITTER
const deleteProductLitter = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_litter')
    .where({
      id: idInput,
    })
    .delete();

    res.redirect('/products/litter')
  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL GROOM
const detailProductsLitter = async (req, res) => {
  const idInput = req.params.id;

 const products_litter =  await knex
    .table('products_litter')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id : idInput
    })

  res.render("detail-produk-litter", {products_litter})

  // res.json({
  //   products_food: products,
  // })
};


// GET ACC
const listProductsAcc = async (req, res) => {
  const products = await knex
  .table('products_acc')
  .select(['id','merk', 'varian', 'harga', 'desc'])

  res.render("produk-acc", { products_acc : products})
};
// POST ACC
const addProductAcc = async (req, res) => {
  await knex.table('products_acc').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.redirect('/products/acc')
  // res.json({
  //   message: 'produk berhasil di tambah',
  // });
};
// UPDATE ACC
const updateProductsAcc = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products_acc').update({
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.redirect('/products/acc')

  // res.json({message: 'berhasil'})
}
// DELETE ACC
const deleteProductAcc = async (req, res) => {
  const idInput = req.params.id;

  await knex
    .table('products_acc')
    .where({
      id: idInput,
    })
    .delete();

    res.redirect('/products/acc')

  // res.json({
  //   message: 'produk berhasil di delete',
  // });
};
// DETAIL GROOM
const detailProductsAcc = async (req, res) => {
  const idInput = req.params.id;

 const products_acc =  await knex
    .table('products_acc')
    .select('id', 'merk', 'varian', 'harga', 'desc')
    .where({
      id : idInput
    })

  res.render("detail-produk-acc", {products_acc})

  // res.json({
  //   products_food: products,
  // })
};


module.exports = {
  listProductsFood,
  detailProductsMedic,
  getDashboard,
  detailProductsFood,
  addProductFood,
  updateProductsFood,
  deleteProductFood,
  listProductsMedic,
  addProductMedic,
  updateProductsMedic,
  deleteProductMedic,
  listProductsVit,
  addProductVit,
  updateProductsVit,
  deleteProductVit,
  listProductsGroom,
  addProductGroom,
  updateProductsGroom,
  deleteProductGroom,
  listProductsLitter,
  addProductLitter,
  updateProductsLitter,
  deleteProductLitter,
  listProductsAcc,
  addProductAcc,
  updateProductsAcc,
  deleteProductAcc,
  detailProductsVit,
  detailProductsGroom,
  detailProductsLitter,
  detailProductsAcc
};